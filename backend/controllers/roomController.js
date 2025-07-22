const Room = require('../models/Room.js')
// masih ada R kapital, perbaiki jadi r
//kecuali di nama kelas dan model
class RoomController{//crud
    static async getRoom(req,res,next) {//r
        try{
            const room = await Room.findAll()
            if(!room) return res.status(404).json({message: "Room not found"})
            res.status(200).json(Room)
        }catch(err){
            next(err)
        }
    }
    static async getRoomId(req, res, next) {//r
        try {
            const room = await Room.findById(req.params.id)
            if (!room) return res.status(404).json({ message: "Room not found" })
            res.status(200).json(room)
        } catch (err) {
            next(err)
        }
    }
    static async createRoom(req, res, next) {//c
        try {
            //copilot code
            //repair me later
            const room = await newRoom.create()
            res.status(201).json(room)
        } catch (err) {
            next(err)
        }
    }
    static async updateRoom(req, res, next) {//u
        try {
            //copilot code
            //repair me later
            const room = await Room.update(req.params.id, req.body)
            if (!room) return res.status(404).json({ message: "Room not found" })
            res.status(200).json(room)
        } catch (err) {
            next(err)
        }
    }
    static async deleteRoom(req, res, next) {//d
        try {
            //copilot code
            //repair me later
            const room = await Room.delete(req.params.id)
            if (!room) return res.status(404).json({ message: "Room not found" })
            res.status(200).json({ message: "Room deleted successfully" })
        } catch (err) {
            next(err)
        }
    }
}

model.exports = RoomController