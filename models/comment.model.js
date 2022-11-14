import mongoose from "mongoose";

const comment = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    twitt: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twitt'
    },
    text: String,
})

const Comment = mongoose.model('Comment', comment)

export default Comment