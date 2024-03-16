<template>
    <div class="container">
        <h2 class="text-2xl font-bold my-4">Checkout</h2>
        <div v-if="selectedProducts.length > 0" class="my-4">
            <div v-for="product in selectedProducts" :key="product.id" class="border p-4 my-2">
                <p class="text-lg">{{ product.name }} - Price: {{ product.price }}</p>
            </div>
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
            return this.$store.state.cart; // Assuming this is where your selected products are stored
        }
    },
    methods: {
        confirmPayment() {
            // Implement payment confirmation logic here
            alert("Thank you for your purchase! Your order will be processed shortly.");
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

.btn {
    display: inline-block;
    padding: 8px 16px;
    margin: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-success {
    background-color: #28a745;
    color: #fff;
}
</style>