// import express from 'express';
// import {
//     products
// } from '../model/Products.js';
// import {
//     traders
// } from '../model/Traders.js';
// import bodyParser from 'body-parser';
// // import { verifyTokenAndAuthorization } from "../middlewear/verifyToken";

// const invRouter = express.Router();

// // Updating a Product in Inventory
// invRouter.patch("/:id", verifyTokenAndAuthorization, bodyParser.json(), async (req, res) => {
//     try {
//         const trader = await trader.findById(req.Trader._id);
//         const product = await product.findById(req.params.id);

//         if (!product) {
//             return res.status(404).json({
//                 message: "Product not found"
//             });
//         }

//         const inInventory = trader.inventory.some((prod) => prod.id === req.params.id);

//         if (inInventory) {
//             res.status(200).json({
//                 message: "Product updated in inventory"
//             });
//         } else {
//             return res.status(403).json({
//                 message: "Product not in inventory"
//             });
//         }
//     } catch (err) {
//         res.status(500).json({
//             error: err.message
//         });
//     }
// });

// // Update items in the user's cart
// invRouter.patch("/:id/cart", [auth, products], async (req, res, next) => {
//     try {
//         const user = await user.findById(req.user._id);
//         const product = await product.findById(req.params.id);

//         if (!product) {
//             return res.status(404).json({
//                 message: "Product not found"
//             });
//         }

//         const inCart = user.cart.some((prod) => prod._id == req.params.id);

//         if (inCart) {
//             // Update the quantity of the product in the cart
//             product.quantity += req.body.quantity;
//         } else {
//             // Add the product to the cart
//             let newCartItem = {
//                 product_id: product._id,
//                 title: product.title,
//                 category: product.category,
//                 img: product.img,
//                 price: product.price,
//                 quantity: req.body.quantity,
//                 created_by: req.user._id
//             };
//             user.cart.push(newCartItem);
//         }

//         const updatedUser = await user.save();
//         res.status(201).json(updatedUser.cart);
//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         });
//     }
// });

// // Delete a Product
// invRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//     try {
//         await products.findByIdAndDelete(req.params.id);
//         res.status(200).json({
//             message: "Product has been deleted"
//         });
//     } catch (err) {
//         res.status(500).json({
//             error: err.message
//         });
//     }
// });

// // Clear the user's cart
// invRouter.delete("/:id/cart", [auth, products], async (req, res, next) => {
//     try {
//         const user = await user.findById(req.user._id);

//         // Clear the user's cart by setting it to an empty array
//         user.cart = [];

//         const updatedUser = await user.save();

//         res.status(200).json({
//             message: "User's cart has been cleared"
//         });
//     } catch (error) {
//         res.status(500).json({
//             error: error.message
//         });
//     }
// });

// export {
//     invRouter
// };