import { connection as db } from "../config/index.js";
class Hotel {
    fetchHotels(req, res) {
      const qry = `
       select
       hotelID, hotelName, hotelDesc, price
       from
       Hotel;
       `
      db.query(qry, (err, results) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          results,
        });
      });
    }
    fetchHotel(req, res) {
      const qry = `
          SELECT 
          hotelID, hotelName, hotelDesc, price
          FROM Hotel
          WHERE hotelID = ${req.params.id};
          `
      db.query(qry, (err, result) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          result,
        });
      });
    }
    async createHotel(req, res) {
      // payload
      let data = req.body;
      
      const qry = `
        INSERT INTO Hotel
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
    async updateHotel(req, res) {
      const data = req.body;
      if (data?.hotelPwd) {
        data.hotelPwd = await hash(data.hotelPwd, 8);
      }
      const qry = `
                UPDATE Hotel
                SET ?
                WHERE hotelID = ?`
      db.query(qry, [data, req.params.id], (err) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: "The hotel information is updated",
        });
      });
    }
    async deleteHotel(req, res) {
      const qry = `
                DELETE FROM Hotel
                WHERE hotelID = ?`;
      db.query(qry, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: "hotel has been deleted",
        });
      });
    }
    // login(req, res) {
    //   const { emailAdd, hotelPwd } = req.body;
    //   const qry = `
    //       SELECT 
    //       hotelID, hotelName, hotelDesc, price
    //       FROM Hotel
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
    //       const validPass = await compare(hotelPwd, result[0].hotelPwd);
    //       if (validPass) {
    //         const token = createToken({
    //           emailAdd,
    //           hotelPwd,
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
  export { Hotel };