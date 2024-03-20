<template>
    <div class="grid-container account-module_account_2ZM2T">
        <div class="grid-x grid-padding-x">
            <section class="cell auto account-module_main-section_S2KZV">
                <div data-ref="animated-switch"></div>
                <div>
                    <div>
                        <div class="orders-module_orders_3tTY2">
                            <div class="orders-module_content_23Yya">
                                <div class="orders-container">
                                    <div class="grid-container">
                                        <div class="grid-x panel panel-collapse">
                                            <div class="cell panel-button">
                                                <button @click="filterOrders" class="orders-filter-button"
                                                    data-ref="orders-filter-button" fdprocessedid="22fm8">Filter Orders:
                                                    <span class="orders-filter-name">{{ filterName }}</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid-x pagehead">
                                        <div class="cell auto small-pagehead">
                                            <h1>Orders</h1>
                                        </div>
                                    </div>
                                    <div class="grid-x grid-margin-x">
                                        <div class="cell auto app-notification"></div>
                                    </div>
                                    <div id="wrapper">
                                        <!-- Empty Order Message -->
                                        <div v-if="noOrders" class="empty-list-message" data-ref="empty-list-message">
                                            <div class="grid-x empty-list-panel empty-list-message-module_panel_EdYDK">
                                                <div class="cell empty-list-message-module_content-container_11jr5">
                                                    <img src="https://shopfront.takealot.com/af70590427b88f68b6c0b66be0cf344279d8aa5f/static/media/src/images/orders/empty-order-icon.svg-6bcc4601443c5d44b8ae.svg"
                                                        alt="Empty Kasi.eCo box icon"
                                                        class="empty-list-message-module_svg-image_20HwM"
                                                        data-ref="empty-box-image">
                                                    <div class="empty-list-message-module_children_1wCTP">
                                                        <p>You have no orders in the last 3 months</p>
                                                    </div>
                                                    <a data-react-link="true" class="button address-default-button"
                                                        data-ref="start-shopping-button" href="/products">Start
                                                        Shopping</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filterName: 'Last 1 months',
            noOrders: true,
            orders: []
        };
    },
    methods: {
        filterOrders() {
            this.orders = this.$store.state.orderDetails;
            this.noOrders = false;
        }
    }
}
</script>

<style scoped>
.empty-list-message {
    text-align: center;
    margin-top: 20px;
}

.empty-list-message img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
}

.empty-list-message p {
    font-size: 1.2rem;
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
</style>