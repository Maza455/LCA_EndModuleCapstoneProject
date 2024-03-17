<template>
    <div class="container">
        <h2 class="text-2xl font-bold my-4">Checkout</h2>
        <div v-if="selectedProducts && selectedProducts.length > 0" class="my-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="product in selectedProducts" :key="product.prodID"
                    class="border p-4 flex flex-col justify-between items-center">
                    <div class="flex items-center mb-2">
                        <img :src="product.imageURL" alt="Product Image" class="w-full h-auto object-cover mb-2">
                        <p class="text-lg">{{ product.prodName }} - Price: R{{ product.prodAmount }} - Quantity: {{
            product.prodQuantity }}</p>
                    </div>
                    <button @click="removeProduct(product)" class="btn btn-danger">Remove</button>
                </div>
            </div>
            <p class="text-lg font-bold mt-4">Total Amount: R{{ calculateTotalAmount }}</p>
            <button @click="confirmPayment" class="btn btn-success mt-4">Confirm Payment</button>
        </div>
        <div v-else class="my-4">
            <p class="text-lg">No products selected. Please add products to your cart.</p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        selectedProducts() {
            return this.$store.state.cart;
        },
        calculateTotalAmount() {
            return this.selectedProducts.reduce((total, product) => total + (product.prodAmount * product.prodQuantity), 0);
        }
    },
    methods: {
        confirmPayment() {
            // Payment confirmation logic
            alert("Thank you for your purchase! Your order will be processed shortly.");
        },
        removeProduct(product) {
            this.$store.commit('removeFromCart', product);
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.grid {
    display: grid;
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
</style>