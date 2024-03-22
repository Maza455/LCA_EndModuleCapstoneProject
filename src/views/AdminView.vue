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

        <button class="addProductButton" @click="showModal = true; isAddProductModal = true">Add Product</button>
        <AddProduct v-if="showModal && isAddProductModal" @save="saveProduct" @close="closeModal" />

        <button class="addUserButton" @click="showModal = true; isAddUserModal = true">Add User</button>
        <AddUser v-if="showModal && isAddUserModal" @save="saveUser" @close="closeModal" />

        <!-- Users Table -->
        <h2 class="table-heading">Users</h2>
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
                    <td>*******</td>
                    <td>{{ user.userRole }}</td>
                    <td>
                        <button @click="editUser(user)">Edit</button>
                        <EditUser v-if="showModal && isEditUserModal" @save="saveUser" @close="closeModal" />
                        <button @click="deleteUserHandler(user)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Products Table -->
        <h2 class="table-heading">Products</h2>
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
                        <EditProduct v-if="showModal && isEditProductModal" @save="saveProduct" @close="closeModal" />
                        <button @click="deleteProductHandler(product)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AddUser from '@/components/Modal/AddUser.vue';
import AddProduct from '@/components/Modal/AddProduct.vue';
import EditUser from '@/components/Modal/EditUser.vue'
import EditProduct from '@/components/Modal/EditProduct.vue'

export default {
    data() {
        return {
            showModal: false,
            isAddUserModal: false,
            isAddProductModal: false,
            isEditProductModal: false,
            editedUser: null,
            editedProduct: null,
        };
    },

    computed: {
        ...mapState(['users', 'products'])
    },
    methods: {
        ...mapActions(['fetchUsers', 'fetchProducts', 'addUser', 'updateUser', 'deleteUser', 'addProduct', 'updateProduct', 'deleteProduct']),

        async fetchData() {
            try {
                await this.fetchUsers();
                await this.fetchProducts();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        saveUser(newUser) {
            this.users.push(newUser);
            this.saveDataToStorage('users', this.users);
            this.closeModal();
        },
        saveProduct(newProduct) {
            this.products.push(newProduct);
            this.saveDataToStorage('products', this.products);
            this.closeModal();
        },
        closeModal() {
            this.showModal = false;
            this.isAddUserModal = false;
            this.isAddProductModal = false;
        },
        deleteUserHandler() {
            this.$store.dispatch('deleteUser', this.user)
                .then(() => {
                    alert('Product deleted successfully');
                })
                .catch(error => {
                    console.error('Error deleting user:', error);
                });
        },
        deleteProductHandler() {
            this.$store.dispatch('deleteProduct', this.product)
                .then(() => {
                    alert('Product deleted successfully');
                })
                .catch(error => {
                    console.error('Error deleting product:', error);
                });
        },
        editUser(user) {
            this.editedUser = { ...user };
            this.showModal = true;
        },
        editProduct(product) {
            this.editedProduct = { ...product };
            this.showModal = true
        },
        async showUsersTable() {
            try {
                await this.fetchUsers();
            } catch (error) {
                console.error('Error fetching users data:', error);
            }
        },
        async showProductsTable() {
            try {
                await this.fetchProducts();
            } catch (error) {
                console.error('Error fetching products data:', error);
            }
        },
        sortEdition(edition) {
            if (edition === 'Users') {
                this.showUsersTable = true;
                this.showProductsTable = false;
            } else if (edition === 'Products') {
                this.showUsersTable = false;
                this.showProductsTable = true;
            } else {
                this.showUsersTable = true;
                this.showProductsTable = true;
            }
        },
        saveDataToStorage(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        },
        getDataFromStorage(key) {
            const data = localStorage.getItem(key);
            try {
                return data ? JSON.parse(data) : [];
            } catch (error) {
                console.error('Error parsing JSON data:', error);
                return [];
            }
        },
    },
    components: {
        'AddUser': AddUser,
        'AddProduct': AddProduct,
        'EditUser': EditUser,
        'EditProduct': EditProduct,
    },
    created() {
        this.fetchData()
        this.showUsersTable();
        this.showProductsTable();
        this.users = this.getDataFromStorage('users');
        this.products = this.getDataFromStorage('products');
    },

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