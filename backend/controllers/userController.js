const User = require('../models/user.js')
class UserController{//crud
    /*
    router.get("/users", UserController.getAllUser)//r
    router.post("/users/create",UserController.createUser)//c
    router.get("/users/:id", UserController.getUserId)//r
    router.get("/users/:id/history", SessionController.getUserHistory)//rx
    router.patch("/users/:id/update", UserController.updateUser)//u
    router.delete("/users/:id/delete", UserController.deleteUser)//d
    */
    static async getAllUser(req,res,next) {//r
        try{
            const user = await User.findAll()
            if(!user){
                throw {message: "No users!"}
            } 
            res.status(200).json(user)
        }catch(err){
            next(err)
        }
    }
    static async createUser(req, res, next) {//c
        try {
            const tempObject={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                birthdate: req.body.birthdate,
                job: req.body.job,
                role: req.body.role,
                profileImgUrl: req.body.profileImgUrl
            }
            const user = await User.create(tempObject)
            res.status(201).json(user)
        } catch (err) {
            next(err)
        }
    }
    static async getUserId(req, res, next) {//r
        try {
            const user = await User.findById(req.params.id)
            if (!user){
                throw {message: "No such user!"}
            } 
            res.status(200).json(user)
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