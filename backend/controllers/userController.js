const User = require('../models/user.js')
class UserController{//crud
    static async getUser(req,res,next) {//r
        try{
            const user = await User.findAll()
            if(!user) return res.status(404).json({message: "User not found"})
            res.status(200).json(user)
        }catch(err){
            next(err)
        }
    }
    static async getUserId(req, res, next) {//r
        try {
            const user = await User.findById(req.params.id)
            if (!user) return res.status(404).json({ message: "User not found" })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    static async createUser(req, res, next) {//c
        try {
            //copilot code
            //repair me later
            const user = await newUser.create()
            res.status(201).json(user)
        } catch (err) {
            next(err)
        }
    }
    static async updateUser(req, res, next) {//u
        try {
            //copilot code
            //repair me later
            const user = await User.update(req.params.id, req.body)
            if (!user) return res.status(404).json({ message: "User not found" })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    static async deleteUser(req, res, next) {//d
        try {
            //copilot code
            //repair me later
            const user = await User.delete(req.params.id)
            if (!user) return res.status(404).json({ message: "User not found" })
            res.status(200).json({ message: "User deleted successfully" })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController