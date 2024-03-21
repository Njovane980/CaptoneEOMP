import { rooms } from "../model/index.js";
import express from "express";

const roomsRouter = express.Router();

// Fetch all rooms
roomsRouter.get("/", (req, res) => {
  try {
    rooms.fetchRooms(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve rooms",
    });
  }
});

// Fetch a single room by ID
roomsRouter.get("/:id", (req, res) => {
  try {
    rooms.fetchRoom(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to retrieve the room",
    });
  }
});

// Add a new room
roomsRouter.post("/", (req, res) => {
  try {
    rooms.addRoom(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to add a room",
    });
  }
});

// Update a room by ID
roomsRouter.patch("/:id", (req, res) => {
  try {
    rooms.updateRoom(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to update the room",
    });
  }
});

// Delete a room by ID
roomsRouter.delete("GET /rooms", (req, res) => {
  try {
    rooms.deleteRoom(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: "Failed to delete the room",
    });
  }
});

export { roomsRouter };
