import {
    connection as db
} from "../config/config.js";

class Customers {
    async createCustomer(customer) {
        const {
            item_name,
            desc,
            img,
            seller
        } = customer;
        const connection = db.getConnection();
        const [result] = await connection.query(
            'INSERT INTO customers (item_name, description, image, seller) VALUES (?, ?, ?, ?)',
            [item_name, desc, img, seller]
        );
        connection.release();
        return result.insertId;
    }

    async getCustomerById(customerId) {
        const connection = db.getConnection();
        const [rows] = await connection.query(
            'SELECT * FROM customers WHERE id = ?',
            [customerId]
        );
        connection.release();
        return rows[0];
    }

    async updateCustomer(customerId, updatedData) {
        const {
            item_name,
            desc,
            img,
            seller
        } = updatedData;
        const connection = db.getConnection();

        await connection.query(
            'UPDATE customers SET item_name = ?, description = ?, image = ?, seller = ? WHERE id = ?',
            [item_name, desc, img, seller, customerId]
        );

        connection.release();
    }

    async deleteCustomerById(customerId) {
        const connection = db.getConnection();

        await connection.query(
            'DELETE FROM customers WHERE id = ?',
            [customerId]
        );

        connection.release();
    }
}

export {
    Customers
};