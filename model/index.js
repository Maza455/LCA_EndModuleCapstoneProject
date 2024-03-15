import {
    Users
} from './Users.js';
import {
    Products
} from './Products.js';
import {
    Orders
} from './Orders.js'
import {
    Customers
} from './Customers.js'
import {
    Admins
} from './Admins.js'

const users = new Users()
let products = new Products()
let orders = new Orders()
let customers = new Customers()
let admins = new Admins()

export {
    users,
    products,
    orders,
    customers,
    admins
}