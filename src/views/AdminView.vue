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

        <h2 class="table-heading"> Users </h2>
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
import { mapState, mapActions } from 'vuex'
import EditUserModal from '@/components/Modal/EditUserModal.vue';
import AddUserModal from '@/components/Modal/AddUserModal.vue';
import EditProductModal from '@/components/Modal/EditProductModal.vue';
import AddProductModal from '@/components/Modal/AddProductModal.vue';

export default {
    data() {
        return {
            selectedUser: '',
            showEditUserModal: false
        };
    },
    components: {
        EditUserModal,
        AddUserModal,
        EditProductModal,
        AddProductModal
    },
    computed: {
        ...mapState(['users', 'products'])
    },
    methods: {
        ...mapActions(['fetchUsers', 'fetchProducts', 'addUser', 'updateUser', 'deleteUser', 'addProduct', 'updateProduct', 'deleteProduct']),
        // User CRUD Operations
        async addUserHandler(newUser) {
            this.showAddUserModal = true;
            await this.addUser(newUser);
        },
        editUser(user) {
            this.selectedUser = user;
            this.showEditUserModal = true;
            this.$emit('openEditUserModal', this.selectedUser);
        },
        async saveEditedUserHandler(updatedUser) {
            await this.updateUser(updatedUser);
        },
        async deleteUserHandler(userId) {
            await this.deleteUser(userId);
        },
        async addProductHandler(newProduct) {
            await this.addProduct(newProduct);
            this.showAddProductModal = true;
        },
        editProductHandler(product) {
            this.selectedProduct = product;
            this.$emit('openEditProductModal', this.selectedProduct);
        },
        async saveEditedProductHandler(updatedProduct) {
            await this.updateProduct(updatedProduct);
            this.$emit('closeEditProductModal');
        },
        async deleteProductHandler(productId) {
            await this.deleteProduct(productId);
        }
    },
    created() {
        this.fetchUsers();
        this.fetchProducts();
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