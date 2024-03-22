<template>
    <div>
        <div class="animation">
            <h3>Purchase Now and Get Discount</h3>
        </div>
        <div class="phone-cards">
            <div class="vertical-cards">

                <div class="phone-card vertical">
                    <img src="https://i.postimg.cc/SNRgLs54/download.jpg" alt="Phone Image">
                    <button onclick="redirectToCheckout()">Purchase</button>
                    <h4>Samsung A52</h4>
                    <p>Price: R6999</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
                <div class="phone-card vertical">
                    <img src="https://i.postimg.cc/HkRs2Bt2/download-1.jpg" alt="Phone Image">
                    <button onclick="redirectToCheckout()">Purchase</button>
                    <h4>Samsung Galaxy S23 Ultra 5G (Dual Sim) 256GB Green</h4>
                    <p>Price: R23,499.00</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
                <div class="phone-card vertical">
                    <img src="https://i.postimg.cc/xdqQWH6d/images.jpg" alt="Phone Image">
                    <button onclick="redirectToCheckout()">Purchase</button>
                    <h4>Galaxy Z Fold5</h4>
                    <p>Price: R38 999,00</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
            </div>


            <div class="horizontal-cards">

                <div class="phone-card horizontal">
                    <img src="https://i.postimg.cc/zvHV56pV/120825871-800-1067.webp" alt="Phone Image">
                    <button onclick="redirectToCheckout()">Purchase</button>
                    <h4>iPhone 15 Pro Max 512GB</h4>
                    <p>Price: R38 299,00</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
                <div class="phone-card horizontal">
                    <img src="https://i.postimg.cc/tRFsSQ1M/mgj83aaa1.webp" alt="Phone Image">
                    <button onclick="redirectToCheckout()">Purchase</button>
                    <h4>iPhone 12 64GB - Blue</h4>
                    <p>Price: R9 999</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
                <div class="phone-card horizontal">
                    <img src="https://i.postimg.cc/TwYtkq0k/iphone-14-productred-pdp-image-position-1a-wwen-300x300-1.webp"
                        alt="Phone Image">
                    <button onclick="redirectToCheckout()">Purchase</button>
                    <h4>iPhone 14 512GB - (PRODUCT)RED</h4>
                    <p>R24 999</p>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToCheckout() {
            this.$router.push({ path: '/checkout' });
        }
    }
}
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

header {
    animation: fadeIn 1s ease-in-out;
}

@keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .animation {
        animation: slideIn 1s ease-in-out;
    }

.phone-cards {
    display: flex;
    justify-content: space-around;
}

.vertical-cards,
.horizontal-cards {
    flex: 1;
}

.phone-card {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.phone-card img {
    width: 25%;
    height: auto;
}

.phone-card h4 {
    margin: 5px 0;
}

.phone-card p {
    font-weight: bold;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
