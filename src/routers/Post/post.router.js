const {Router} = require('express')
const {AddPost, AllPosts, SinglePosts, EditPosts, DeletePosts} = require('../../controllers/Post/post.controller')

const PostsRouter = Router()

PostsRouter.get("/Show",AllPosts)
PostsRouter.get("/SinglePosts/:id",SinglePosts)
PostsRouter.post("/Add",AddPost)
PostsRouter.patch("/EditPosts/:id",EditPosts)
PostsRouter.delete("/DeletePosts/:id",DeletePosts)

module.exports = PostsRouter