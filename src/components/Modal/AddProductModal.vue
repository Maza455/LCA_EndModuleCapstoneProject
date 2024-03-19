<template>
    <form @submit.prevent="addNewProduct">
        <div class="modal">
            <div class="modal-content">
                <!-- <h2>Add New Product</h2> -->
                <label for="prodName">Product Name:</label>
                <input v-model="newProduct.prodName" type="text" id="prodName" placeholder="Enter Product Name">

                <label for="prodQuantity">Quantity:</label>
                <input v-model="newProduct.prodQuantity" type="number" id="prodQuantity" placeholder="Enter Quantity">

                <label for="prodAmount">Amount:</label>
                <input v-model="newProduct.prodAmount" type="number" id="prodAmount" placeholder="Enter Amount">

                <label for="prodDesc">Description:</label>
                <textarea v-model="newProduct.prodDesc" id="prodDesc" placeholder="Enter Description"></textarea>

                <!-- <button type="submit">Add Product</button> -->
            </div>
        </div>
    </form>

</template>

<script>
export default {
    data() {
        return {
            newProduct: {
                prodName: '',
                prodQuantity: 0,
                prodAmount: 0,
                prodDesc: ''
            }
        };
    },
    methods: {
        addNewProduct() {
            this.$emit('save', this.newProduct);
        },
    }
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
}

.modal-content {
    display: flex;
    flex-direction: column;
}

h2 {
    text-align: center;
}

label {
    margin-top: 10px;
}

input,
textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
}

button {
    margin-top: 10px;
}
</style>