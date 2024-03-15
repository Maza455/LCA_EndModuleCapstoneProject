import {
    connection as db
} from "../config/config.js";

class Orders {
    getOrderById = async (orderId) => {
        const connection = db.getConnection();
        const [rows] = await connection.query(
            'SELECT * FROM orders WHERE id = ?',
            [orderId]
        );
        connection.release();
        return rows[0];
    };

    // update an order by ID
    updateOrder = async (orderId, updatedData) => {
        const {
            customer,
            products
        } = updatedData;
        const connection = db.getConnection();

        await connection.query(
            'UPDATE orders SET customer_id = ?, product_id = ? WHERE id = ?',
            [customer, products, orderId]
        );

        connection.release();
    };
}

export {
    Orders
};