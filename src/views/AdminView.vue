<template>
    <div>
        <button class="admin-btn" @click="showUsersTable">Users</button>
        <button class="admin-btn" @click="showProductsTable">Products</button>
        <hr class="text-white" />
        <!-- Sort Items -->
        <div class="container d-flex justify-content-start mb-3 mt-5 pt-4">
            <div class="d-flex w-25 ms-3">
                <label for="" class="form-label">Sort by Edition</label>
                <select class="form-select" name="" id="sortEdition" @change="sortEdition">
                    <option value="All">All</option>
                    <option value="users">Users</option>
                    <option value="products">Products</option>
                </select>
            </div>
            <div class="d-flex w-25 ms-3">
                <label for="" class="form-label">Sort Title</label>
                <select class="form-select" name="" id="sortTitle" @change="sortTitle">
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
        </div>

        <button class="addProductButton" @click="showAddProductModal = true">Add Product</button>
        <AddProductModal v-if="showAddProductModal" @save="addNewProduct"></AddProductModal>

        <button class="addUserButton" @click="showAddUserModal = true">Add User</button>
        <AddUserModal v-if="showAddUserModal" @save="addNewUser"></AddUserModal>

        <h2 class="table-heading" > Users </h2>
        <!-- Users Table -->
        <table v-if="users" id="usersTable">
            <!-- Table headers -->
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>User Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <!-- Table body for users -->
            <tbody id="usersTableBody">
                <tr v-for="user in users" :key="user.userID">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.userAge }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td> ******* </td>
                    <td>{{ user.userRole }}</td>
                    <td>
                        <button @click="editUser(user)">Edit</button>
                        <EditUserModal v-if="showEditUserModal" :user="selectedUser" @save="saveEditedUser">
                        </EditUserModal>
                        <button @click="deleteUser(user)">Delete</button>

                    </td>
                </tr>
            </tbody>
        </table>

        <h2 class="table-heading">Products</h2>
        <!-- Products Table -->
        <table v-if="products" id="productsTable">
            <!-- Table headers -->
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <!-- Table body for products -->
            <tbody id="productsTableBody">
                <tr v-for="product in products" :key="product.prodID">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td>{{ product.prodAmount }}</td>
                    <td>{{ product.prodDesc }}</td>
                    <td>
                        <img class="img-fluid w-25" :src="product.imageURL" :alt="product.prodName" />
                    </td>
                    <td>
                        <button @click="editProduct(product)">Edit</button>
                        <EditProductModal v-if="showEditProductModal" :product="selectedProduct"
                            @save="saveEditedProduct">
                        </EditProductModal>
                        <button @click="deleteProduct(product)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import EditUserModal from '@/components/Modal/EditUserModal.vue';
import AddUserModal from '@/components/Modal/AddUserModal.vue';
import EditProductModal from '@/components/Modal/EditProductModal.vue';
import AddProductModal from '@/components/Modal/AddProductModal.vue';

export default {
    components: {
        EditUserModal,
        AddUserModal,
        EditProductModal,
        AddProductModal
    },

    data() {
        return {
            showAddProductBtn: true,
            showAddUserBtn: true,
            showEditUserModal: false,
            showAddUserModal: false,
            showEditProductModal: false,
            showAddProductModal: false,
            selectedUser: null,
            selectedProduct: null
        };
    },

    computed: {
        products() {
            return this.$store.state.products;
        },
        users() {
            return this.$store.state.users;
        },
    },

    methods: {
        showUsersTable() {
            this.showAddProductBtn = false;
            this.showAddUserBtn = false;
        },

        showProductsTable() {
            this.showAddProductBtn = false;
            this.showAddUserBtn = false;
        },

        addNewProduct(newProductData) {
            // Generate a unique ID for the new product
            const newProductId = Math.floor(Math.random() * 1000); // You can use a more robust method for generating IDs

            // Create a new product object with the provided data and the generated ID
            const newProduct = {
                prodID: newProductId,
                prodName: newProductData.prodName,
                prodQuantity: newProductData.prodQuantity,
                prodAmount: newProductData.prodAmount,
                prodDesc: newProductData.prodDesc
                // Add more fields as needed
            };

            // Update the data store with the new product
            this.$store.commit('ADD_PRODUCT', newProduct); // Assuming you are using Vuex for state management

            // Close the modal after adding the new product
            this.showAddProductModal = false;
        },

        addNewUser() {
            this.showAddUserModal = true;
        },
        saveEditedUser() {
            this.showEditUserModal = false;
        },
        editUser(user) {
            this.editingUser = { ...user };
            this.showEditUserModal = true;
            sessionStorage.setItem('users', JSON.stringify(this.users));
        },
        deleteUser(user) {
            if (confirm(`Are you sure you want to delete user ${user.firstName} ${user.lastName}?`)) {
                const index = this.users.findIndex(u => u.userID === user.userID);
                if (index !== -1) {
                    this.users.splice(index, 1);
                }
            }
            sessionStorage.setItem('users', JSON.stringify(this.users));
        },
        editProduct(product) {
            this.editingProduct = { ...product };
            this.showEditProductModal = true;
            sessionStorage.setItem('products', JSON.stringify(this.products));
        },
        saveEditedProduct() {
            this.showEditProductModal = false;
        },


        deleteProduct(product) {
            if (confirm(`Are you sure you want to delete ${product.prodName}?`)) {
                const index = this.products.findIndex(p => p.prodID === product.prodID);
                if (index !== -1) {
                    this.products.splice(index, 1);
                }
            }
            sessionStorage.setItem('products', JSON.stringify(this.products));
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts'),
            this.$store.dispatch('fetchUsers')
    }
};
</script>

<style scoped>
.addUserButton,
.addProductButton {
    display: block;
    margin: 0 auto;
}

.addUserButton,
.addProductButton {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin: 10px;
}

.addUserButton:hover,
.addProductButton:hover {
    background-color: #0056b3;
}

.admin-btn {
    background-color: indigo;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

table {
    width: 100%;
    border-collapse: collapse;
}
.table-heading {
    text-align: center;
    margin-bottom: 20px;
}

th,
td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #F2F2F2;
}
</style>