import mongoose from "mongoose";

const twitt = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    },
    comment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'comment'
    },
    text: String,
    likes: {
        type: Number,
        default: 0
    }
})

const Twitt = mongoose.model('Twitt', twitt)

export default Twitt