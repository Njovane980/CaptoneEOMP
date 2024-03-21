import { rooms } from "../model/index.js";
import express from "express";
import bodyParser from "body-parser";
const roomsRouter = express.Router();
// Fetch rooms pictures
roomsRouter.get("/", (req, res) => {
  try {
    rooms.fetchRooms(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve room",
    });
  }
});
//  Fetch rooms picture
roomsRouter.get("/:id", (req, res) => {
  try {
    rooms.fetchRooms(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve a room",
    });
  }
});
roomsRouter.post("/addRooms", (req, res) => {
  try {
    rooms.createRooms(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a room",
    });
  }
});
roomsRouter.patch("/update/:id", (req, res) => {
  try {
    rooms.updateRooms(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update a room",
    });
  }
});
roomsRouter.delete("/delete/:id", (req, res) => {
  try {
    rooms.deleteRooms(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete a room",
    });
  }
});
export { roomsRouter };