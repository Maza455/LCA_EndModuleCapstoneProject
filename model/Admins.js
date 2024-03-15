import {
    connection as db
} from "../config/config.js";

class Admins {
    fetchAdmins(req, res) {
        const qry = `
            SELECT adminId, firstName, lastName, cell, businessName, address, image, email
            FROM Admins;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchAdmin(req, res) {
        const qry = `
            SELECT adminId, firstName, lastName, cell, businessName, address, image, email
            FROM Admins
            WHERE adminId = ${req.params.id};
        `;
        db.query(qry, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result: result[0]
            });
        });
    }

    createAdmin(req, res) {
        let data = req.body;

        const qry = `
            INSERT INTO Admins
            SET ?;
        `;

        db.query(qry, [data], (err) => {
            if (err) {
                res.json({
                    status: res.statusCode,
                    msg: 'Failed to add a new admin.'
                });
            } else {
                res.json({
                    status: res.statusCode,
                    msg: 'New admin added successfully.'
                });
            }
        });
    }

    updateAdmin(req, res) {
        const qry = `
            UPDATE Admins
            SET ?
            WHERE adminId = ${req.params.id};
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The admin information has been updated."
            });
        });
    }

    deleteAdmin(req, res) {
        const qry = `
            DELETE FROM Admins
            WHERE adminId = ${req.params.id};
        `;
        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The admin information has been deleted."
            });
        });
    }
}

export {
    Admins
};
