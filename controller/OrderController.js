import express from 'express';
import {
    orders
} from "../model/index.js";
// import { Controller } from "./productsController.js";

const orderRouter = express.Router();

// Create a new order
orderRouter.post("/:id", async (req, res) => {
    try {
        const {
            customer,
            products
        } = req.body;
        const order = new order({
            customer,
            products
        });
        await order.save();
        res.status(201).json({
            message: 'Order created successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Get all orders
orderRouter.get("/", async (req, res) => {
    try {
        const orders = await orders.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Get an order by ID
orderRouter.get("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const order = await order.findById(id);
        if (!order) {
            return res.status(404).json({
                error: 'Order not found'
            });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Update an order by ID
orderRouter.patch("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            customer,
            products
        } = req.body;
        const order = await order.findByIdAndUpdate(id, {
            customer,
            products
        }, {
            new: true
        });

        if (!order) {
            return res.status(404).json({
                error: 'Order not found'
            });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Delete an order by ID
orderRouter.delete("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const order = await order.findByIdAndDelete(id);

        if (!order) {
            return res.status(404).json({
                error: 'Order not found'
            });
        }

        res.json({
            message: 'Order deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Delete all orders
orderRouter.delete("/delete-all-orders", async (req, res) => {
    try {
        await orders.deleteMany();

        res.json({
            message: 'All orders deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

export {
    orderRouter
}