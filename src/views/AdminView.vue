<template>
    <div>
        <!-- Styled Modal Trigger Button -->
        <button @click="showModal = true" class="modal-button">Open Modal</button>

        <!-- Modal -->
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <!-- Modal Close Button -->
                <span @click="showModal = false" class="close">&times;</span>

                <!-- Add Book Form -->
                <input type="text" v-model="newBook.title" placeholder="Title">
                <input type="text" v-model="newBook.edtn" placeholder="Edition">
                <input type="number" v-model="newBook.price" placeholder="Price">
                <input type="text" v-model="newBook.img" placeholder="Image URL">
                <input type="text" v-model="newBook.year" placeholder="Year">
                <input type="text" v-model="newBook.author" placeholder="Author">

                <button @click="createBook">Add Book</button>

                <!-- Display Books -->
                <ul>
                    <li v-for="(book, index) in sortedBooks" :key="index">
                        {{ book.title }} - {{ book.price }}
                        <button @click="updateBook(index)">Edit</button>
                        <button @click="deleteBook(index)">Delete</button>
                        <button @click="addToCart(index)">Add to Cart</button>
                    </li>
                </ul>

                <!-- Cart Section -->
                <h2>Cart</h2>
                <ul>
                    <li v-for="(item, index) in checkOut" :key="index">
                        {{ item.quantity }} x {{ item.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [],
            checkOut: [],
            newBook: {
                title: '',
                edtn: '',
                price: 0,
                img: '',
                year: '',
                author: '',
            },
            showModal: false,
        };
    },
    methods: {
        createBook() {
            if (!this.newBook.title || !this.newBook.price || !this.newBook.img) {
                alert("Please fill in all fields");
                return;
            }
            this.books.push({ ...this.newBook });
            // Use cookies to store books data
            document.cookie = `books=${JSON.stringify(this.books)}`;
            this.newBook = {
                title: '',
                edtn: '',
                price: 0,
                img: '',
                year: '',
                author: '',
            };
        },
        updateBook(position) {
            // Update the book at the specified position
            if (!this.books[position]) {
                alert("Invalid book position");
                return;
            }

            const updatedBook = {
                title: this.newBook.title,
                edtn: this.newBook.edtn,
                price: this.newBook.price,
                img: this.newBook.img,
                year: this.newBook.year,
                author: this.newBook.author,
            };

            this.books.splice(position, 1, updatedBook);
            localStorage.setItem("Books", JSON.stringify(this.books));
        },
        deleteBook(position) {
            // Delete the book at the specified position
            if (!this.books[position]) {
                alert("Invalid book position");
                return;
            }

            const confirmation = confirm(`Are you sure you want to remove ${this.books[position].title.toUpperCase()} from the list?`);

            if (confirmation) {
                this.books.splice(position, 1);
                localStorage.setItem("Books", JSON.stringify(this.books));
            }
        },
        addToCart(position) {
            this.checkOut.push({
                quantity: 1,
                ...this.books[position]
            });
            localStorage.setItem("cart", JSON.stringify(this.checkOut));
        },
        sortEdition() {
            // Implement sortEdition logic
        },
        sortName() {
            // Implement sortName logic
        },
        sortPrice() {
            // Implement sortPrice logic
        },
    },
    computed: {
        sortedBooks() {
            return this.books.slice().sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
        },
    },
};
</script>

<style>
/* CSS for modal styling */
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
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

/* CSS for styled button */
.modal-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.modal-button:hover {
    background-color: #0056b3;
}
</style>