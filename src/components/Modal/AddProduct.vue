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
.modal-content form label {
    display: block;
    text-align: center;
    margin-bottom: 10px;
}

.modal-content form input[type="text"],
.modal-content form input[type="number"] {
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