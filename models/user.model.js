import mongoose from "mongoose";

const user = mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', user)

export default User