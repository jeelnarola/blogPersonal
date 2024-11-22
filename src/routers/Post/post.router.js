const {Router} = require('express')
const {AddPost, AllPosts, SinglePosts, EditPosts, DeletePosts} = require('../../controllers/Post/post.controller')

const PostsRouter = Router()

PostsRouter.post("/Add",AddPost)
PostsRouter.get("/Show",AllPosts)
PostsRouter.post("/SinglePosts/:id",SinglePosts)
PostsRouter.patch("/EditPosts/:id",EditPosts)
PostsRouter.delete("/DeletePosts/:id",DeletePosts)

module.exports = PostsRouter