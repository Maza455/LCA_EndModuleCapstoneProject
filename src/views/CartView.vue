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
            <p class="text-lg">No products selected. Please add products to your cart.</p>
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
    /* Set the width of the card to 25% */
    block-size: 25%;
    /* Set the vertical size of the card to 25% */
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    /* Adjust margin for spacing */
}

.product-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.product-details {
    margin-top: 10px;
    /* Adjust margin for spacing */
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