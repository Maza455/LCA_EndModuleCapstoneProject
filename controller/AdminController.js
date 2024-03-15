import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';
import {
    admins
} from '../model/index.js';
import bodyParser from 'body-parser';

const adminRouter = express.Router();

// Create Admin
adminRouter.post('/signUp', bodyParser.json(), async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            cell,
            businessName,
            address,
            image,
            email,
            password
        } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new admins.Admins(
            firstName,
            lastName,
            cell,
            businessName,
            address,
            image,
            email,
            hashedPassword
        );

        const createdAdminId = await newAdmin.createAdmin();

        res.status(201).json({
            adminID: createdAdminId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Sign In Admin
adminRouter.post('/signIn', bodyParser.json(), async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const admin = await admins.findByEmail(email);

        if (!admin) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }

        const token = jwt.sign({
            id: admin.adminID
        }, process.env.JWT_SECRET, {
            expiresIn: 86400
        });

        res.status(200).json({
            adminID: admin.adminID,
            email: admin.email,
            firstName: admin.firstName,
            lastName: admin.lastName,
            businessName: admin.businessName,
            address: admin.address,
            accessToken: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Get all Admins
adminRouter.get('/', async (req, res) => {
    try {
        const allAdmins = await admins.getAllAdmins();
        res.json(allAdmins);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Get Admin by ID
adminRouter.get('/:id', async (req, res) => {
    try {
        const adminId = req.params.id;
        const admin = await admins.getAdminById(adminId);

        if (!admin) {
            return res.status(404).json({
                error: 'Admin not found'
            });
        }

        res.json(admin);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Update Admin by ID
adminRouter.patch('/:id', bodyParser.json(), async (req, res) => {
    try {
        const adminId = req.params.id;
        const updatedData = req.body;

        await admins.updateAdmin(adminId, updatedData);

        res.json({
            message: 'Admin updated successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

// Delete Admin by ID
adminRouter.delete('/:id', async (req, res) => {
    try {
        const adminId = req.params.id;

        await admins.deleteAdminById(adminId);

        res.json({
            message: 'Admin deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

export {
    adminRouter
};
