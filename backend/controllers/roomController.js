const {Room,Session} = require('../models')
// masih ada R kapital, perbaiki jadi r
//kecuali di nama kelas dan model
class RoomController{//crud
    static async getAllRoom(req,res,next) {//r
        try{
            const rooms = await Room.findAll({include:[{model:Session}]})
            if(!rooms){
                throw {name:"nodata",message: "No rooms found!"}
            }
            res.status(200).json(rooms)
        }catch(err){
            next(err)
        }
    }
    static async getRoomId(req, res, next) {//r
        try {
            const room = await Room.findByPk(req.params.id,
                {
                    include: [
                        { model: Session }
                    ]
                }
            )
            if (!room){
                throw {name:"nodata",message: "No such room!" }
            }
            res.status(200).json(room)
        } catch (err) {
            next(err)
        }
    }
    static async createRoom(req, res, next) {//c
        try {
            const room = await Room.create(req.body)
            res.status(201).json(room)
        } catch (err) {
            next(err)
        }
    }
    static async updateRoom(req, res, next) {//u
        try {
            const room = await Room.update(req.body, {
                where: { id: req.params.id }
            })
            if (!room){
                throw {name:"nodata",message: "No such room!" }
            }
            res.status(200).json(room)
        } catch (err) {
            next(err)
        }
    }
    static async deleteRoom(req, res, next) {//d
        try {
            const room = await Room.destroy({
                where: { id: req.params.id }
            })
            if (!room){
                throw {name:"nodata",message: "No such room!" }
            }
            res.status(200).json({ message: "Room deleted successfully" })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = RoomController