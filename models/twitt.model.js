import mongoose from "mongoose";

const twitt = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    comment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Comment'
    },
    text: String,
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Likes'
    }]
})

const Twitt = mongoose.model('Twitt', twitt)

export default Twitt