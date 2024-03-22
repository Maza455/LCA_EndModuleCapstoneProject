<template>
    <section class="deals">
        <h1 class="first">BOOK STORE</h1>
        <marquee width="100%" direction="left" height="100px" scrollamount="12">
            More Genre Will Be Added Soon !! Thanks for your patience.
        </marquee>
        <br>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">

                </div>
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/s2s5Vjtq/images-1.jpg" alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/ppDQsy3Y/download-4.jpg"
                        alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/21rQMrDp/download-3.jpg"
                        alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/t7nNVB5c/download-2.jpg"
                        alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/FfGDD1dn/images-5.jpg"
                        alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/FdRGqm0F/images-4.jpg"
                        alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/DW7xr1ZX/images-3.jpg"
                        alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <img src="https://i.postimg.cc/WdG9q52V/images-2.jpg"
                        alt="Course Image">
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a to="/checkout"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>



        <!-- Fetch data from backend -->
        <!-- <div v-if="loading">
            Loading...
        </div>
        <div v-else>
            <div v-for="book in books" :key="book.prodID">
                <h1>{{ book.prodName }}</h1>
                <p class="text">{{ book.prodDesc }}</p>
                <a to="/checkout"><button class="buybutton">Buy</button></a>
            </div>
        </div> -->
    </section>
</template>

<script>
// import axios from 'axios';

export default {
    data() {
        return {
            loading: true,
            books: []
        };
    },
    // async created() {
    //     try {
    //         const response = await axios.get('');
    //         this.books = response.data;
    //         this.loading = false;
    //     } catch (error) {
    //         console.error(error);
    //         this.loading = false;
    //     }
    // }
};
</script>