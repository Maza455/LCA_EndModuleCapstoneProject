<template>
    <div>
        <form @submit.prevent="addProduct">
            <label for="prodName">Product Name:</label>
            <input type="text" id="prodName" v-model="newProduct.prodName" required><br>

            <label for="prodQuantity">Quantity:</label>
            <input type="number" id="prodQuantity" v-model="newProduct.prodQuantity" required><br>

            <label for="prodAmount">Amount:</label>
            <input type="number" id="prodAmount" v-model="newProduct.prodAmount" required><br>

            <label for="prodDesc">Description:</label>
            <input type="text" id="prodDesc" v-model="newProduct.prodDesc" required><br>

            <label for="imageURL">Image:</label>
           
            <input type="text" id="imageURL" v-model="newProduct.imageURL" required><br>

            <button type="submit" @click="saveProduct">Save</button>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // showModal: false,
            // isAddProductModal: false,
            newProduct: {
                prodID: 0,
                prodName: '',
                prodQuantity: 0,
                prodAmount: 0,
                prodDesc: '',
                imageURL: '',
              
            }
        };
    },
    methods: {
        saveProduct() {
            this.$emit('save', this.newProduct);
            this.newProduct = {
                prodID: 0,
                prodName: '',
                prodQuantity: 0,
                prodAmount: 0,
                prodDesc: '',
                imageURL: '',
            };
        },
        closeModal() {
            if (this.isAddProductModal) {
                this.isAddProductModal = false;
            } else {
                this.showModal = false;
                this.$router.push('/');
            }
        },
    }
};
</script>

<style scoped>
.modal-content form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;
}

.modal-content form label {
    text-align: left;
    margin-bottom: 10px;
}

.modal-content form input[type="text"],
.modal-content form input[type="number"] {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.modal-content form button {
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    background-color: #ff9900;
    /* Takealot orange color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.modal-content form button:hover {
    background-color: indigo;
}
</style>
