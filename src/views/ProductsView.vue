<template>
    <div class="container">
        <div class="sort-container">
            <input type="text" placeholder="Search Product" v-model="searchQuery" @input="searchProducts">
            <div class="sort-buttons">
                <button @click="sortBy('desc')" class="sort-button">Sort By Desc</button>
                <button @click="sortBy('asc')" class="sort-button">Sort By Asc</button>
            </div>
        </div>
        <div class="product-container">
            <div class="product-card" v-for="product in filteredProducts" :key="product.prodID">
                <div class="image-container">
                    <img :src="product.imageURL" alt="Product Image" class="product-image">
                    <button @click="viewMore(product)" class="view-more-button">View More</button>
                </div>
                <div class="content">
                    <h4>{{ product.prodName }}</h4>
                    <div v-if="product.showDetails">
                        <p>Quantity: {{ product.prodQuantity }}</p>
                        <p>Amount: {{ product.prodAmount }}</p>
                        <p>Book_Size: {{ product.prodSize }}</p>
                        <p>Book_Color: {{ product.prodColor }}</p>
                        <p>Description: {{ product.prodDesc }}</p>
                        <button @click="back(product)" class="back-button">Back</button>
                    </div>
                    <button @click="addToCheckout(product)" class="btn btn-primary">Purchase</button>
                    <div class="quantity-container">
                        <button @click="updateQuantity(product, 'decrement')" class="quantity-button">-</button>
                        <span class="quantity">{{ product.quantity || 1 }}</span>
                        <button @click="updateQuantity(product, 'increment')" class="quantity-button">+</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <h2>Login</h2>
                <input type="email" placeholder="Email" v-model="email">
                <input type="password" placeholder="Password" v-model="password">
                <button @click="login">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            cart: [],
            showModal: false,
            email: '',
            password: ''
        };
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        filteredProducts() {
            if (this.products) {
                return this.products.filter(product =>
                    product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            } else {
                return [];
            }
        }
    },
    methods: {
        viewMore(product) {
            product.showDetails = !product.showDetails;
        },
        incrementQuantity(product) {
            product.quantity = (product.quantity || 1) + 1;
        },
        decrementQuantity(product) {
            if (product.quantity && product.quantity > 1) {
                product.quantity -= 1;
            }
        },

        updateQuantity(product, action) {
            if (action === 'increment') {
                product.quantity = (product.quantity || 1) + 1;
            } else if (action === 'decrement' && product.quantity > 1) {
                product.quantity -= 1;
            }
        },

        back(product) {
            product.showDetails = !product.showDetails;
        },
        sortBy(sortType) {
            if (sortType === 'desc') {
                this.products.sort((a, b) => b.prodName.localeCompare(a.prodName));
            } else {
                this.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
            }
        },
        searchProducts() {
            this.filteredProducts.sort((a, b) => a.prodName.localeCompare(b.prodName));
        },
        addToCheckout(product) {
            // Add the selected product to the shared state (e.g., Vuex store)
            this.$store.commit('addToCart', product);

            // Show alert message
            alert(`${product.prodName} has been added to your cart!`);

            // Redirect to the checkout page after a short delay to allow the alert to be seen
            setTimeout(() => {
                // Retrieve updated cart data from the store
                const updatedCart = this.$store.state.cart;

                // Check if updatedCart is defined and contains the added product
                if (updatedCart && updatedCart.length > 0) {
                    // Update your logic here to handle displaying the cart with selected products
                    // You can set a flag or state variable to control the visibility of the cart section
                } else {
                    console.error('Product was not added to the cart.');
                }
            }, 1000); // 1 second delay
        },
        showLoginModal(product) {
            this.showModal = true;
            console.log('Product selected:', product)
        },
        login() {
            this.$router.push('/checkout');
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    }
}
</script>

<style scoped>
.container {
    text-align: center;
}

.sort-container {
    margin-bottom: 20px;
}

.sort-buttons {
    display: flex;
    justify-content: center;
}

.sort-button {
    padding: 10px 20px;
    background-color: #FF9900;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
    transition: background-color 0.3s;
}

.sort-button:hover {
    background-color: indigo;
}

.product-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

.product-card {
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.image-container {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    margin-top: 20px;
}

.view-more-button,
.back-button,
.purchase-button,
.sort-button {
    padding: 10px 20px;
    background-color: indigo;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.view-more-button:hover,
.back-button:hover,
.purchase-button:hover,
.sort-button:hover {
    background-color: indigo;
}

.quantity-container {
    display: flex;
    align-items: center;
}

.quantity-button {
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
}

.quantity {
    font-size: 16px;
    font-weight: bold;
    padding: 0 10px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 5px;
}

.modal input,
.modal button {
    margin-bottom: 10px;
}
</style>