import { bookings } from "../model/index.js";
import express from "express";
import bodyParser from "body-parser";
const bookingsRouter = express.Router();
// Fetch Bookings pictures
bookingsRouter.get("/", (req, res) => {
  try {
    users.fetchBookings(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve products",
    });
  }
});
//  Fetch Bookings picture
bookingsRouter.get("/:id", (req, res) => {
  try {
    users.fetchBookings(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a product",
    });
  }
});
bookingsRouter.post("/:add", (req, res) => {
  try {
    users.addBookings(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a product",
    });
  }
});
bookingsRouter.patch("/:edit", (req, res) => {
  try {
    users.updateBookings(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a product",
    });
  }
});
bookingsRouter.delete("/:delete", (req, res) => {
  try {
    users.deleteBookings(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete a product",
    });
  }
});
export { bookingsRouter };