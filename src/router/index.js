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
import store from "../store/index.js";

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
    path: "/account",
    name: "account",
    component: () => import("../views/AccountView.vue"),
    meta: {
      requiresAuth: true,
      requiresBuyer: true,
      title: "AccountView",
    },
  },
  {
    path: "/account/register",
    name: "registration",
    component: () => import("../views/RegistrationView.vue"),
    meta: {
      requiresGuest: true,
      title: "RegistrationView",
    },
  }, {
    path: "/account/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: {
      requiresGuest: true,
      title: "LoginView",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFoundView.vue"),
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

router.beforeEach((to) => {
  if (
    (to.meta.requiresAuth || to.meta.requiresAdmin) &&
    !store.state.auth.logged
  ) {
    return "/account/login";
  } else if (
    (to.meta.requiresGuest && store.state.auth.logged) ||
    (to.meta.requiresAdmin && !store.state.auth.isAdmin) ||
    (to.meta.requiresBuyer && store.state.auth.isAdmin)
  ) {
    return "/";
  }
});

router.beforeEach((to) => {
  const baseTitle = process.env.VUE_APP_TITLE;
  document.title = to.meta.title ?
    `${to.meta.title} - ${baseTitle}` :
    baseTitle;
});

export default router;
