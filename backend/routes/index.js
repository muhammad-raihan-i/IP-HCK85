const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController.js')
const RoomController = require('../controllers/roomController.js')
const login=require("../middlewares/login.js")
const {loginGate}=require("../middlewares/loginGate.js")
const SessionController = require('../controllers/sessionController.js')
const errorHandler=require('../middlewares/errorHandler.js')

//credentials
router.post("/login", login,errorHandler)//p

//user
router.post("/gemini",loginGate,UserController.gemini2,errorHandler)//p
router.get("/users",loginGate, UserController.getAllUser,errorHandler)//r
router.post("/users/create",loginGate, UserController.createUser,errorHandler)//c
router.get("/users/:id",loginGate, UserController.getUserId,errorHandler)//r
router.put("/users/:id/update",loginGate, UserController.updateUser,errorHandler)//u
router.delete("/users/:id/delete",loginGate, UserController.deleteUser,errorHandler)//d

//room
router.get("/rooms",loginGate, RoomController.getAllRoom,errorHandler)//r
router.post("/rooms/create",loginGate, RoomController.createRoom,errorHandler)//c
router.get("/rooms/:id",loginGate, RoomController.getRoomId,errorHandler)//r
router.put("/rooms/:id/update",loginGate, RoomController.updateRoom,errorHandler)//u
router.delete("/rooms/:id/delete",loginGate, RoomController.deleteRoom,errorHandler)//d

//session
router.get("/sessions",loginGate, SessionController.getAllSessions,errorHandler)//r
router.post("/sessions/create",loginGate, SessionController.createSession,errorHandler)//c
router.get("/sessions/:id",loginGate, SessionController.getSessionById,errorHandler)//r
router.put("/sessions/:id/update",loginGate, SessionController.updateSession,errorHandler)//u

//legend c=create r=read rx=readExternal u=update d=delete
console.log("Router initialized")
module.exports = router