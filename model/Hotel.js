import { connection as db } from "../config/index.js";
class Hotel{
    fetchHotel(req, res){
        const qry = `
        bookingID, userName, userSurname, roomNumber, checkinDate,  
        checkoutDate,  contactNumber,
        from Hotel;
        `
        db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchBooking(req, res){
        const qry = `
        bookingID userName, userSurname, roomNumber, 
        checkinDate,  checkoutDate, contactNumber,
        from Hotel
        where prodID = ${req.params.id}`
        db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    addBooking(req, res){
        const qry = `insert into Hotel set ?;`
        db.query(qry,[req.body] ,(err) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Listing successfully added'
            })
    })
}}
export{
    Hotel
}