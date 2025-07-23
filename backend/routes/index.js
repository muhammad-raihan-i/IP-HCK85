const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController.js')
const RoomController = require('../controllers/roomController.js')
const SessionController = require('../controllers/sessionController.js')
const errorHandler=require('../middlewares/errorHandler.js')

//user
router.get("/users", UserController.getAllUser,errorHandler)//r
router.post("/users/create",UserController.createUser,errorHandler)//c
router.get("/users/:id", UserController.getUserId,errorHandler)//r
router.put("/users/:id/update", UserController.updateUser,errorHandler)//u
router.delete("/users/:id/delete", UserController.deleteUser,errorHandler)//d

//room
router.get("/rooms", RoomController.getAllRoom,errorHandler)//r
router.post("/rooms/create", RoomController.createRoom,errorHandler)//c
router.get("/rooms/:id", RoomController.getRoomId,errorHandler)//r
router.put("/rooms/:id/update", RoomController.updateRoom,errorHandler)//u
router.delete("/rooms/:id/delete", RoomController.deleteRoom,errorHandler)//d

//session
router.get("/sessions", SessionController.getAllSessions,errorHandler)//r
router.post("/sessions/create", SessionController.createSession,errorHandler)//c
router.get("/sessions/:id", SessionController.getSessionById,errorHandler)//r
router.put("/sessions/:id/update", SessionController.updateSession,errorHandler)//u

//legend c=create r=read rx=readExternal u=update d=delete
console.log("Router initialized")
module.exports = router