import {
  createRouter,
  createWebHistory
} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import AdminView from '../views/AdminView.vue';
import CartView from '../views/CartView.vue';
import ContactView from '../views/ContactView.vue';
import CareersView from '../views/CareersView.vue';
import BooksView from '../views/BooksView.vue';
import PhonesView from '../views/PhonesView.vue'
import OrderView from '../views/OrderView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
      path: '/careers',
      name: 'careers',
      component: CareersView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/phones',
      name: 'phones',
      component: PhonesView
    },
  {
    path: '/orders',
    name: 'orders',
    component: OrderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
