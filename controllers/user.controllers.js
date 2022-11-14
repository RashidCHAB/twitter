import User from "../models/user.model.js";

export default {
    addUser: (req, res) => {
        User.create({
           username: req.body.username,
           password: req.body.password 
        }).then((a) => {
            res.json(a)
        })
        
     },
    delUser: (req, res) => {
        User.findByIdAndDelete(req.params.userId).then(() => {
            res.json("User deleted succesfully")
        })
     },
    updateUser: (req, res) => { 
        User.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            password: req.body.password 
        }, {new: true}).then((a) => {
            res.json(a)})
    },
    getUsers: (req, res) => {
        User.find().then((a) => {
            res.json(a)
        })
     },
    getUserById: (req, res) => {
        User.findById(req.params.userId).then((a) => {
            res.json(a)
        })
     },
     
}