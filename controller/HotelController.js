import { hotel } from "../model/index.js";
import express from "express";
import bodyParser from "body-parser";
const hotelRouter = express.Router();
// Fetch Hotel pictures
hotelRouter.get("/", (req, res) => {
  try {
    users.fetchHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve products",
    });
  }
});
//  Fetch Hotel picture
hotelRouter.get("/:id", (req, res) => {
  try {
    users.fetchHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a product",
    });
  }
});
hotelRouter.post("/:add", (req, res) => {
  try {
    users.addHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a product",
    });
  }
});
hotelRouter.patch("/:update", (req, res) => {
  try {
    users.updateHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a product",
    });
  }
});
hotelRouter.delete("/:delete", (req, res) => {
  try {
    users.deleteHotel(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete a product",
    });
  }
});
export { hotelRouter };