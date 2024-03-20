import {
  createStore
} from 'vuex';
// import auth from "./module/auth.js";

const dataUrl = 'https://lc-capstoneendmodueproject-1.onrender.com/'
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    cart: [],
    orderDetails: {}
  },
  // module: {
  //   auth
  // },

  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    updateProduct(state, updatedProduct) {
      state.products = state.products.map(product => (product.prodID === updatedProduct.prodID ? updatedProduct : product));
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(product => product.prodID !== productId);
    },
    addProduct(state, newProduct) {
      state.products.push(newProduct);
    },
    updateUser(state, updatedUser) {
      state.users = state.users.map(user => (user.userID === updatedUser.userID ? updatedUser : user));
    },
    deleteUser(state, userId) {
      state.users = state.users.filter(user => user.userID !== userId);
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    addToCart(state, product) {
        state.cart.push(product);
    },
    removeFromCart(state, product) {
      const index = state.cart.findIndex(item => item.prodID === product.prodID);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    saveOrderDetails(state, orderDetails) {
      state.orderDetails = orderDetails;
    }
  },

  actions: {
    // Products CRUD operations
    async fetchProducts(context) {
      let res = await fetch(`${dataUrl}products`);
      let {
        results
      } = await res.json();
      if (results) {
        context.commit('setProducts', results);
      }
    },
    async fetchProduct(context, id) {
      let res = await fetch(`${dataUrl}products/${id}`);
      let {
        result
      } = await res.json();
      if (result) {
        context.commit('setProduct', result);
      }
    },
    async updateProduct(context, updatedProduct) {
      let res = await fetch(`${dataUrl}products/${updatedProduct.prodID}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        context.commit('updateProduct', updatedProduct);
      }
    },
    async deleteProduct(context, productId) {
      let res = await fetch(`${dataUrl}products/${productId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        context.commit('deleteProduct', productId);
      }
    },
    async addProduct(context, newProduct) {
      let res = await fetch(`${dataUrl}products`, {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        context.commit('addProduct', newProduct);
      }
    },

    // Users CRUD operations
    async fetchUsers(context) {
      let res = await fetch(`${dataUrl}users`);
      let {
        results
      } = await res.json();
      if (results) {
        context.commit('setUsers', results);
      }
    },
    async fetchUser(context, id) {
      let res = await fetch(`${dataUrl}users/${id}`);
      let {
        result
      } = await res.json();
      if (result) {
        context.commit('setUser', result);
      }
    },
    async updateUser(context, updatedUser) {
      let res = await fetch(`${dataUrl}users/${updatedUser.userID}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedUser),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        context.commit('updateUser', updatedUser);
      }
    },
    async deleteUser(context, userId) {
      let res = await fetch(`${dataUrl}users/${userId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        context.commit('deleteUser', userId);
      }
    },
    async addUser(context, newUser) {
      let res = await fetch(`${dataUrl}users/${newUser}`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        context.commit('addUser', newUser)
      }
    }
  }
  
});

