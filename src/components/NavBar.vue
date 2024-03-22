<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background: indigo;">
        <div class="container-fluid">
            <router-link to="/">
                <img src="https://i.postimg.cc/JznRsq0R/Screenshot-2024-02-22-135719.png" alt="logo" width="45"
                    height="35" class="d-inline-block align-text-top mr-2 navbar-logo" />
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-capitalize">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link active">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link active">Products</router-link>
                    </li>

                    <ul class="navbar-nav list-group-horizontal mb-2 mb-lg-0">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="settingsDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-gear">Login's</i>
                            </a>
                            <ul class="dropdown-menu dropdown-custom no-collapse text-center p-3"
                                aria-labelledby="settingsDropdown">
                                <div v-if="logged">
                                    <li @click="logOut" class="dropdown-item">Logout</li>
                                    <li v-if="!isAdmin">
                                        <div class="d-grid">
                                            <router-link to="/account" class="btn btn-success">
                                                My account
                                            </router-link>
                                        </div>
                                    </li>
                                </div>
                                <div v-else>
                                    <li>
                                        <div class="d-grid">
                                            <router-link to="/account/login" class="btn btn-success">
                                                Login
                                            </router-link>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/admin" @click.prevent="showLoginModal"
                                            class="btn btn-success">Admin</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/account/register" class="dropdown-item">
                                            New user? <u>Register now</u>
                                        </router-link>
                                    </li>
                                </div>
                            </ul>
                        </li>
                        <li v-if="!isAdmin" class="nav-item">
                            <a href="#" class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#cartBar"
                                aria-controls="cartBar">
                                <i class="bi bi-cart"></i>
                            </a>
                        </li>
                    </ul>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link to="/careers" class="dropdown-item">Careers</router-link></li>
                            <li><router-link to="/books" class="dropdown-item">Books</router-link></li>
                            <li><router-link to="/phones" class="dropdown-item">Phones</router-link></li>
                            <li><router-link to="/orders" class="dropdown-item">Order</router-link></li>

                            <li>
                                <hr class="dropdown-divider">
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" @click.prevent="showCheckoutModal"
                            class="nav-link active">Checkout</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link active">Contact</router-link>
                    </li>
                </ul>



                <!-- Login/Register Modals -->
                <div v-if="showModal">
                    <!-- Signup Modal -->
                    <div v-if="isSignupModal" class="modal">
                        <div class="modal-content">
                            <span class="close" @click="closeModal">&times;</span>
                            <h2>SignUp</h2>
                            <form>
                                <label for="firstName">First Name:</label><br>
                                <input type="text" id="firstName" name="firstName"><br>
                                <label for="lastName">Last Name:</label><br>
                                <input type="text" id="lastName" name="lastName"><br>
                                <label for="email">Email:</label><br>
                                <input type="email" id="email" name="email"><br>
                                <label for="password">Password:</label><br>
                                <input type="password" id="password" name="password"><br>
                                <label for="retypePassword">Retype Password:</label><br>
                                <input type="password" id="retypePassword" name="retypePassword"><br>
                                <input type="submit" value="Signup">
                            </form>
                        </div>
                    </div>

                    <!-- Admin Login Form -->
                    <div v-if="showModal && isLoginModal && isAdminLogin" class="modal">
                        <div class="modal-content">
                            <span class="close" @click="closeModal">&times;</span>
                            <h2>Admin Login</h2>
                            <form>
                                <label for="businessName">Business Name:</label><br>
                                <input type="text" id="businessName" name="businessName"><br>
                                <label for="cellphone">Cellphone Number:</label><br>
                                <input type="text" id="cellphone" name="cellphone"><br>
                                <label for="imageURL">Image URL:</label><br>
                                <input type="text" id="imageURL" name="imageURL"><br>
                                <label for="firstName">First Name:</label><br>
                                <input type="text" id="firstName" name="firstName"><br>
                                <label for="lastName">Last Name:</label><br>
                                <input type="text" id="lastName" name="lastName"><br>
                                <label for="password">Password:</label><br>
                                <input type="password" id="password" name="password"><br>
                                <label for="retypePassword">Retype Password:</label><br>
                                <input type="password" id="retypePassword" name="retypePassword"><br>
                                <label for="token">Token:</label><br>
                                <input type="text" id="token" name="token"><br>
                                <input type="submit" value="Login">
                            </form>
                        </div>
                    </div>

                    <!-- User Login Form -->
                    <div v-if="isLoginModal && !isAdminLogin" class="modal">
                        <div class="modal-content">
                            <span class="close" @click="closeModal">&times;</span>
                            <h2>User Login</h2>
                            <form>
                                <label for="email">Email:</label><br>
                                <input type="email" id="email" name="email"><br>
                                <label for="password">Password:</label><br>
                                <input type="password" id="password" name="password"><br>
                                <button @click.prevent="switchToAdminLogin">Login_Admin</button>
                                <button @click.prevent="switchToUserLogin">Login_User</button>
                                <input type="submit" value="Login">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
      showModal: false,
      isSignupModal: false,
      isLoginModal: false,
      isAdminLogin: false,
      logged: false,
      isAdmin: false
    };
    },
    methods: {
        showLoginModal() {
            this.showModal = true;
            this.isLoginModal = true;
            this.isSignupModal = false;
        },
        showCheckoutModal() {
            this.showModal = true;
            this.isLoginModal = true;
            this.isSignupModal = false;
        },
        showOrderModal() {
            this.showModal = true;
            this.isLoginModal = true;
            this.isSignupModal = false;
        },
        showSignupModal() {
            this.showModal = true;
            this.isLoginModal = false;
            this.isSignupModal = true;
        },
        closeModal() {
            if (this.isSignupModal) {
                this.isSignupModal = false;
                this.isLoginModal = true;
            } else {
                this.showModal = false;
                this.$router.push('/');
            }
        },
        switchToAdminLogin() {
            this.isAdminLogin = true;
        },
        switchToUserLogin() {
            this.isAdminLogin = false;
        }
    }
};
</script>

<style scoped>
.modal-content form label {
    display: block;
    text-align: center;
    margin-bottom: 10px;
}

.modal-content form input[type="text"],
.modal-content form input[type="email"],
.modal-content form input[type="password"] {
    display: block;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.modal-content form input[type="submit"] {
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 5px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}


.navbar-nav .nav-item .nav-link {
    color: white;
}

.modal {
    display: block;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    /* Could be more or less, depending on screen size */
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>