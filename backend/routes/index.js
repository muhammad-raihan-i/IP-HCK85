const express = require('express')
const router = express.router()
const UserController = require('../controllers/userController.js')
const RoomController = require('../controllers/roomController.js')
const SessionController = require('../controllers/sessionController.js')

//user
router.get("/users", UserController.getAllUser)//r
router.post("/users/create",UserController.createUser)//c
router.get("/users/:id", UserController.getUserId)//r
router.get("/users/:id/history", SessionController.getUserHistory)//rx
router.patch("/users/:id/update", UserController.updateUser)//u
router.delete("/users/:id/delete", UserController.deleteUser)//d

//room
router.get("/rooms", RoomController.getAllRoom)//r
router.post("/rooms/create", RoomController.createRoom)//c
router.get("/rooms/:id", RoomController.getRoomId)//r
router.get("/rooms/:id/history", SessionController.getRoomHistory)//r
router.patch("/rooms/:id/update", RoomController.updateRoom)//u
router.delete("/rooms/:id/delete", RoomController.deleteRoom)//d

//session
router.get("/sessions", SessionController.getAllSession)//r
router.post("/sessions/create", SessionController.createSession)//c
router.get("/sessions/:id", SessionController.getSessionId)//r
router.patch("/sessions/:id/update", SessionController.updateSession)//u

//legend c=create r=read rx=readExternal u=update d=delete

module.exports = router