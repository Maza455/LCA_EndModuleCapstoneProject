// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// // import {
// //     user as User
// // } from "../models/index.js";
// import express from "express"
// // import {
// //     config
// // } from "config/dotenv";
// import bodyParser from "body-parser";
// // import verifyToken from "../middleware/index.js"

// const authRouter = express.Router();


// // Get trader's profile
// authRouter.get('/profile', verifyToken, async(req, res) => {
//     try {
//         // Access the authenticated trader's ID from req.decodedToken
//         const traderId = req.decodedToken.id;

//         // Retrieve the trader's profile from the database based on traderId
//         const trader = await Trader.findById(traderId);

//         if (!trader) {
//             return res.status(404).json({
//                 message: 'Trader profile not found'
//             });
//         }

//         // Customize the response based on the trader's profile data
//         const profileData = {
//             id: trader._id,
//             username: trader.username,
//             email: trader.email,
//             // Add more profile data fields as needed
//         };

//         res.json(profileData);
//     } catch (error) {
//         res.status(500).json({
//             error: 'Internal server error'
//         });
//     }
// });

// // Signup a new user
// authRouter.post("/:id", bodyParser.json(), async(req, res) => {
//     const user = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 8)
//     });

//     try {
//         const savedUser = await user.save();

//         if (req.body.roles) {
//             const roles = await Role.find({
//                 name: {
//                     $in: req.body.roles
//                 }
//             });
//             user.roles = roles.map(role => role._id);
//         } else {
//             const role = await Role.findOne({
//                 name: "user"
//             });
//             user.roles = [role._id];
//         }

//         await user.save();

//         res.send({
//             message: "User was registered successfully!"
//         });
//     } catch (err) {
//         res.status(500).send({
//             message: err
//         });
//     }
// });

// // Sign in a user
// authRouter.post("/:id", bodyParser.json(), async(req, res) => {
//     try {
//         const user = await User.findOne({
//             username: req.body.username
//         }).populate("roles", "-__v");

//         if (!user) {
//             return res.status(404).send({
//                 message: "User Not found."
//             });
//         }

//         const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

//         if (!passwordIsValid) {
//             return res.status(401).send({
//                 accessToken: null,
//                 message: "Invalid Password!"
//             });
//         }

//         const token = jwt.sign({
//             id: user.id
//         }, config.secret, {
//             expiresIn: 86400
//         });

//         const authorities = user.roles.map(role => "ROLE_" + role.name.toUpperCase());

//         res.status(200).send({
//             id: user._id,
//             username: user.username,
//             email: user.email,
//             roles: authorities,
//             accessToken: token
//         });
//     } catch (err) {
//         res.status(500).send({
//             message: err
//         });
//     }
// });

// export {
//     express,
//     verifyToken,
//     authRouter
// }