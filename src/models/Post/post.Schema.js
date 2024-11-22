const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date },
}, { timestamps: true });

const Posts = mongoose.model("Post",PostSchema)

module.exports = Posts