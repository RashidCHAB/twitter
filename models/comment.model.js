import mongoose from "mongoose";

const comment = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    twitt: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'twitt'
    },
    text: String,
    likes: {
        type: Number,
        default: 0
    }
})

const Comment = mongoose.model('Comment', comment)

export default Comment