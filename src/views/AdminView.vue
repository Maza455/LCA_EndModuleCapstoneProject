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

        <button v-if="showAddProductBtn" @click="showAddProductModal">Add Product</button>
        <button v-if="showAddUserBtn" @click="showAddUserModal">Add User</button>

        <h2> Users </h2>
        <!-- Users Table -->
        <table v-if="users" id="usersTable">

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
                        <button @click="deleteUser(user)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
        <br>
        <br>

        <h2>Products</h2>
        <!-- Products Table -->
        <table v-if="products" id="productsTable">

            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Image</th>

                </tr>
            </thead>
            <tbody id="productsTableBody">
                <tr v-for="product in products" :key="product.prodID">
                    <td>{{ product.prodID }}</td>
                    <td>{{ product.prodName }}</td>
                    <td>{{ product.prodQuantity }}</td>
                    <td>{{ product.prodAmount }}</td>
                    <td>{{ product.prodDesc }}</td>
                    <td>
                        <img class="img-fluid w-25" :src="product.imageURL" :alt="product.prodName" />
                        <button @click="editProduct(product)">Edit</button>
                        <button @click="deleteProduct(product)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <EditUserModal v-if="showEditUserModal" :user="selectedUser" @save="saveEditedUser"></EditUserModal>
        <AddUserModal v-if="showAddUserModal" @save="addNewUser"></AddUserModal>
        <EditProductModal v-if="showEditProductModal" :product="selectedProduct" @save="saveEditedProduct">
        </EditProductModal>
        <AddProductModal v-if="showAddProductModal" @save="addNewProduct"></AddProductModal>
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
            return this.$store.state.products
        },
        users() {
            return this.$store.state.users
        },
    },
    methods: {
        showUsersTable() {
            this.showUsers = true;
            this.showProducts = false;
            this.showAddProductBtn = false;
            this.showAddUserBtn = false;

        },
        showProductsTable() {
            this.showUsers = false;
            this.showProducts = true;
            this.showAddProductBtn = false;
            this.showAddUserBtn = false;

        },
        
        
        addNewProduct() {
            this.showAddProductModal = false
        },
        addNewUser() {
            this.showAddUserModal = false;
        },
        editUser(user) {
            this.editingUser = { ...user };
            this.showEditUserModal = true;
            sessionStorage.setItem('users', JSON.stringify(this.users));
        },
        savedEditedUser() {
            this.showEditUserModal = false;

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

table {
    width: 100%;
    border-collapse: collapse;
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