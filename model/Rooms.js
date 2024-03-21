import { connection as db } from "../config/index.js";
class Rooms {
    fetchRooms(req, res) {
      const qry = `
       select
       roomID, roomName, location, reviews, descript, features, capacity, price, imageURL
       Rooms;
       `
      db.query(qry, (err, results) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          results,
        });
      });
    }
    fetchRooms(req, res) {
      const qry = `
          SELECT 
          roomID, roomName, location, reviews, descript, features, capacity, price, imageURL
          FROM Rooms
          WHERE RoomsID = ${req.params.id};
          `
      db.query(qry, (err, result) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          result,
        });
      });
    }
    async createRooms(req, res) {
      // payload
      let data = req.body;
      
      const qry = `
        INSERT INTO Rooms
        SET ?;
        `;
      db.query(qry, [data], (err) => {
        if (err) {
          res.json({
            status: res.statusCode,
            msg: "Failed to add a new Room."
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "You're added a new room"
          })
        }
      });
    }
    async updateRooms(req, res) {
      const data = req.body;
      if (data?.RoomsPwd) {
        data.RoomsPwd = await hash(data.RoomsPwd, 8);
      }
      const qry = `
                UPDATE Rooms
                SET ?
                WHERE RoomsID = ?`
      db.query(qry, [data, req.params.id], (err) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: "The Rooms information is updated",
        });
      });
    }
    async deleteRooms(req, res) {
      const qry = `
                DELETE FROM Rooms
                WHERE RoomsID = ?`;
      db.query(qry, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: "Rooms has been deleted",
        });
      });
    }
    // login(req, res) {
    //   const { emailAdd, RoomsPwd } = req.body;
    //   const qry = `
    //       SELECT 
    //       RoomsID, RoomsName, RoomsDesc, price
    //       FROM Rooms
    //       WHERE emailAdd = '${emailAdd}';
    //       `
    //   db.query(qry, async (err, result) => {
    //     if (err) throw err;
    //     if (!result?.length) {
    //       res.json({
    //         status: statusCode,
    //         msg: "Wrong email address provided",
    //       });
    //     } else {
    //       const validPass = await compare(RoomsPwd, result[0].RoomsPwd);
    //       if (validPass) {
    //         const token = createToken({
    //           emailAdd,
    //           RoomsPwd,
    //         });
    //         res.json({
    //           status: res.statusCode,
    //           msg: "you're logged in",
    //           token,
    //           result: result[0],
    //         });
    //       } else {
    //         res.json({
    //           status: res.statusCode,
    //           msg: "Please provide the correct password",
    //         });
    //       }
    //     }
    //   });
    // }
  }
  export { Rooms };