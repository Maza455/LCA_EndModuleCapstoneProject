<template>
    <div class="container">
        <h2 class="text-2xl font-bold my-4">Checkout</h2>
        <div v-if="selectedProducts && selectedProducts.length > 0" class="my-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(product, index) in selectedProducts" :key="product.prodID + index"
                    class="border p-4 flex flex-col justify-between items-center product-card">
                    <div class="product-image">
                        <img :src="product.imageURL" alt="Product Image" class="w-full h-auto object-cover">
                    </div>
                    <div class="product-details">
                        <p class="text-lg">{{ product.prodName }}</p>
                        <p>Price: R{{ product.prodAmount }}</p>
                    </div>
                    <button @click="removeProduct(product)" class="btn btn-danger">Remove</button>
                </div>
            </div>
            <p class="text-lg font-bold mt-4">Total Amount: R{{ calculateTotalAmount }}</p>
            <button @click="confirmPayment" class="btn btn-success mt-4">Confirm Payment</button>

            <div v-if="showPaymentForm" class="my-4">
                <form @submit.prevent="submitForm" class="payment-form">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="email" required>
                    <label for="address">Address for Delivery:</label>
                    <textarea id="address" v-model="address" required></textarea>
                    <button type="submit" class="btn btn-success mt-4">Submit</button>
                </form>
            </div>

        </div>
        <div v-else class="my-4">
            <!-- Empty Cart Message -->
            <div v-if="selectedProducts && selectedProducts.length === 0"
                class="cart-content-module_empty-cart-message_3HVJ-" data-ref="empty-cart-message">
                <div class="empty-list-message " data-ref="empty-list-message">
                    <div class="grid-x empty-list-panel empty-list-message-module_panel_EdYDK">
                        <div class="cell empty-list-message-module_content-container_11jr5">
                            <img src="https://shopfront.takealot.com/af70590427b88f68b6c0b66be0cf344279d8aa5f/static/media/src/images/cart/empty-cart.svg-a3f63604a3d49f7b220a.svg"
                                alt="Empty shopping cart" class="empty-list-message-module_svg-image_20HwM"
                                data-ref="empty-box-image">
                            <div class="empty-list-message-module_children_1wCTP">
                                <p class="cart-content-module_empty-message_2aBS6">Your shopping cart is empty</p>
                            </div>
                            <a data-react-link="true" class="button address-default-button"
                                data-ref="continue-shopping-button" href="/">Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPaymentForm: false,
            email: '',
            address: ''
        };
    },
    computed: {
        selectedProducts() {
            return this.$store.state.cart;
        },
        calculateTotalAmount() {
            return this.selectedProducts.reduce((total, product) => total + (product.prodAmount), 0);
        }
    },
    methods: {
        confirmPayment() {
            this.showPaymentForm = true;
        },
        submitForm() {
            alert("Thank you for confirming! Please check your email for the order details.");
            this.showPaymentForm = false;
        },
        removeProduct(product) {
            if (product.prodQuantity > 0) {
                product.prodQuantity--;
            }
            this.$store.commit('removeFromCart', product);
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.grid {
    display: grid;
}

.product-card {
    width: 25%;
    block-size: 25%;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
}

.product-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.product-details {
    margin-top: 10px;
}

.cart-content-module_empty-cart-message_3HVJ- {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.empty-list-message {
    margin: 0 auto;
    max-width: 400px;
}

.empty-list-message-module_svg-image_20HwM {
    width: 150px;
    height: auto;
    margin-bottom: 20px;
}

.cart-content-module_empty-message_2aBS6 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
}

.button.address-default-button {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: indigo;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

.button.address-default-button:hover {
    background-color: indigo;
}

.btn {
    display: inline-block;
    padding: 8px 16px;
    margin-top: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-danger {
    background-color: #dc3545;
    color: #fff;
}

.btn-success {
    background-color: #28a745;
    color: #fff;
}

.payment-form label,
.payment-form input,
.payment-form textarea,
.payment-form button {
    display: block;
    margin-bottom: 10px;
}
</style>