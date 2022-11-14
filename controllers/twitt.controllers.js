import Twitt from "../models/twitt.model.js";

export default {
    addTwitt: (req, res) => {
        Twitt.create({
            user: req.body.user,
            comment: req.body.comment,
            text: req.body.text,
            likes: req.body.likes
        }).then((a) => {
            res.json(a)
        })
    },
    delTwitt: (req, res) => {
        Twitt.findByIdAndDelete(req.params.twittId).then(() => {
            res.json('Twitt deleted')
        })
    },
    updateTwitt: (req, res) => {
        Twitt.findByIdAndUpdate(req.params.twittId, {
            user: req.body.user,
            twitt: req.body.twitt,
            text: req.body.text,
            likes: req.body.likes
        }, { new: true }).then((a) => {
            res.json(a)
        })
    },
    getTwitt: (req, res) => {
        Twitt.find().populate('comment').populate('user').populate('likes').then((a) => {
            res.json(a)
        })
    },
    getTwittById: (req, res) => {
        Twitt.find({ twittId: req.params.id }).populate('comment').populate('user').populate('likes').then((a) => {
            res.json(a)
        })
    },
    getTwittByUser: (req, res) => {
        Twitt.find({ userId: req.params.id }).populate('comment').populate('user').populate('likes').then((a) => {
            res.json(a)
        })
    },
    addLike: (req, res) => {
        Twitt.findByIdAndUpdate({ _id: req.params.twittId }, {$push: {likes: req.body.likes}}, {new: true}).then((a) => { res.json(a) })
    }
}