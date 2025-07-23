const {User} = require('../models')
class UserController{//crud
    /*
    router.get("/users/:id/history", SessionController.getUserHistory)//rx
    router.delete("/users/:id/delete", UserController.deleteUser)//d
    */
   //router.get("/users", UserController.getAllUser)//r
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
            console.log("=========================")
            console.log(err,"ini error createUser")
            next(err)
        }
    }
    //router.get("/users/:id", UserController.getUserId)//r
    static async getUserId(req, res, next) {//r
        try {
            const user = await User.findByPk(req.params.id)
            if (!user){
                throw {message: "No such user!"}
            } 
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    //router.patch("/users/:id/update", UserController.updateUser)//u
    static async updateUser(req, res, next) {//u
        try {

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