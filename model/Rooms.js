import { connection as db } from "../config/index.js";

class Rooms {
    fetchRooms(req , res) {
        const qry = `
        SELECT roomID, roomName, location, reviews, descript, features, capacity, price, imageURL
        FROM Rooms;
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchRoom(req, res) {
        const qry = `
        SELECT roomID, roomName, location, reviews, descript, features, capacity, price, imageURL
        FROM Rooms
        WHERE roomID = ${req.params.id};
        `;
        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    addRoom(req, res) {
        const qry = `INSERT INTO Rooms SET ?;`;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Room successfully added'
            });
        });
    }
}

export { Rooms };
