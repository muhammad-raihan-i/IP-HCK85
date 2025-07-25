const {User,Session} = require('../models')
const gemini=require("../helpers/gemini.js")
class UserController{
   //router.get("/users", UserController.getAllUser)//r
   static async gemini2(req,res,next){
        try{
            const {prompt}=req.body
            res.status(200).json({message:gemini(prompt)})
        }catch(err){
            next(err)
        }
    }
    static async getAllUser(req,res,next) {//r
        try{
            console.log("getAllUser")
            const user = await User.findAll()
            if(!user){
                throw {message: "No users!"}
            } 
            res.status(200).json(user)
        }catch(err){
            next(err)
        }
    }
    //router.post("/users/create",UserController.createUser)//c
    static async createUser(req, res, next) {//c
        try {
            const user = await User.create(req.body)
            res.status(201).json(user)
        } catch (err) {
            next(err)
        }
    }
    //router.get("/users/:id", UserController.getUserId)//r
    static async getUserId(req, res, next) {//r
        try {
            const user = await User.findByPk(req.params.id, {
                include: [
                    { 
                        model: Session 
                    }
                ] 
            })
            if (!user){
                throw {name:"nodata",message: "No such user!"}
            } 
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    //router.patch("/users/:id/update", UserController.updateUser)//u
    static async updateUser(req, res, next) {//u
        try {
            const user = await User.findByPk(req.params.id)
            if (!user) {
                throw { name: "nodata", message: "No such user!" }
            }
            const updatedUser = await User.update(
                req.body,
                {
                    where: { id: req.params.id },
                    individualHooks: true,
                }//object
            )
            delete updatedUser.password
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    }
    static async deleteUser(req, res, next) {//d
        try {
            const user = await User.destroy({
                where: { id: req.params.id }
            })
            if (!user){
                throw {name:"nodata",message:"No such user!" }
            } 
            res.status(200).json({ message: "User deleted successfully" })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController