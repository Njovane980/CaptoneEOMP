import { hotel } from "../model/index.js";
import express from "express";
import bodyParser from "body-parser";
const hotelRouter = express.Router();
// Fetch Hotel pictures
hotelRouter.get("/", (req, res) => {
  try {
    hotel.fetchHotels(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve room",
    });
  }
});
//  Fetch Hotel picture
hotelRouter.get("/:id", (req, res) => {
  try {
    hotel.fetchHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a room",
    });
  }
});
hotelRouter.post("/addHotel", (req, res) => {
  try {
    hotel.createHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a room",
    });
  }
});
hotelRouter.patch("/update/:id", (req, res) => {
  try {
    hotel.updateHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a room",
    });
  }
});
hotelRouter.delete("/delete/:id", (req, res) => {
  try {
    hotel.deleteHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete a room",
    });
  }
});
export { hotelRouter };