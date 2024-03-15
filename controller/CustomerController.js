import express from 'express';
import {
    customers
} from '../model/index.js';
import bodyParser from 'body-parser';

const customerRouter = express.Router();

customerRouter.post('/customer-signup', bodyParser.json(), async (req, res) => {
    try {
        const {
            email,
            password,
            fname,
            deliveryAddress,
            contact
        } = req.body;
        const customer = new customer({
            email,
            password,
            fname,
            deliveryAddress,
            contact
        });
        await customer.save();
        res.status(201).json({
            message: 'Customer created successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

customerRouter.get('/get-all-customers', async (req, res) => {
    try {
        const customers = await customers.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

customerRouter.get('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const customer = await customer.findById(id);
        if (!customer) {
            return res.status(404).json({
                error: 'Customer not found'
            });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

customerRouter.patch('/:id', bodyParser.json(), async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            email,
            password,
            fname,
            shippingAddress,
            contactNumber
        } = req.body;
        const customer = await customer.findByIdAndUpdate(id, {
            email,
            password,
            fname,
            shippingAddress,
            contactNumber
        }, {
            new: true
        });
        if (!customer) {
            return res.status(404).json({
                error: 'Customer not found'
            });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

customerRouter.delete('/:id', bodyParser.json(), async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const customer = await customer.findByIdAndDelete(id);
        if (!customer) {
            return res.status(404).json({
                error: 'Customer not found'
            });
        }
        res.json({
            message: 'Customer deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

customerRouter.delete('/deleteAll-customers', bodyParser.json(), async (req, res) => {
    try {
        await customers.deleteMany();
        res.json({
            message: 'All customers deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

export {
    express,
    customerRouter
}
