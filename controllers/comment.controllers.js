import Comment from "../models/comment.model.js";

export default {
    addComment: (req, res) => {
        Comment.create({
            user: req.body.user,
            twitt: req.body.twitt,
            text: req.body.text,
        }).then((a) => {
            res.json(a)
        })
    },
    delComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.id).then(() => {
            res.json("Comment has been delete")
        })
    },
    updateComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.id,
            {
                user: req.body.user,
                twitt: req.body.twitt,
                text: req.body.text,
                likes: req.body.likes
            })
    },
    getComment: (req, res) => {
        Comment.find().populate('twitt').populate('user').then((a) => { res.json(a) })
    },
    getCommentById: (req, res) => {
        Comment.find({ commentId: req.params.id }).populate('twitt').populate('user').then((a) => { res.json(a) })
    },
    getCommentByTwitt: (req, res) => {
        Comment.find({ twitt: req.params.twittId }).populate('twitt').populate('user').then((a) => { res.json(a) })
    },
    getCommentByUser: (req, res) => {
        Comment.find({ user: req.params.userId }).populate('twitt').populate('user').then((a) => { res.json(a) })
    }
}