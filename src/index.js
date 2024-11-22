const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser')
const authRouter = require('./routers/auth/auth.router');
const {DataBaseConnect} = require('./configs/connectDB');
const PostsRouter = require('./routers/Post/post.router');
const PotsManger = require('./middlewares/PostsManegar.middlewares');
require('dotenv').config({ path: "../.env" })
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())


app.use('/api/auth',authRouter)
app.use('/api/posts',PotsManger,PostsRouter)
app.use(cors())

app.listen(process.env.PORT,()=>{
    console.log("server")
    DataBaseConnect()
})