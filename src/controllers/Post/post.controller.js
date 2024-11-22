const Posts = require("../../models/Post/post.Schema");

const AddPost = async(req,res)=>{
    try {
        let {title,content,author,isPublished,publishedAt} = req.body;
        if (!title || !content || !isPublished){
            return res.status(400).json({success:false,message:"All Fields Are Required"})
        }

        let PostsObj = new Posts({
            title,
            content,
            isPublished,
            publishedAt: new Date(),
            author:req.user._id
        })
        // console.log("User",req.user._id)

        await PostsObj.save()
        res.status(201).json({success:true,Data:{
            ...PostsObj._doc,
        }})
    } catch (error) {
        console.log("Error in AddPost controller", error.message)
        res.status(500).json({success:false,message:"Interna; Server Error"})
    }
}

const AllPosts = async(req,res)=>{
    try {
        let AllPosts = await Posts.find();
        res.status(201).json({success:true,Data:{
            ...AllPosts,
        }})
    } catch (error) {
        console.log("Error in AllPosts controller", error.message)
        res.status(500).json({success:false,message:"Interna; Server Error"})
    }
}

const SinglePosts = async(req,res)=>{
    let {id} = req.params
    try {
        let SingleData = await Posts.findById(id)
        res.status(201).json({success:true,Data:SingleData})
    } catch (error) {
        console.log("Error in SinglePosts controller", error.message)
        res.status(500).json({success:false,message:"Interna; Server Error"})
    }
}

const EditPosts = async(req,res) =>{
    let {id} = req.params
    try {
        let {title,content,isPublished} = req.body;
        const existingPost = await Posts.findById(id);
        
        if (!existingPost) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        
        if (!existingPost.author.equals(req.user._id)) {
            return res.status(403).json({ success: false, message: 'Unauthorized' });
        }

        let EditPosts = await Posts.findByIdAndUpdate(id,{ title,
            content,
            isPublished,
            author:req.user._id
        },{
            new: true, // Return the updated document
            runValidators: true, // Ensure validation rules are applied
          })
        res.status(201).json({success:true,data:EditPosts})
    } catch (error) {
        console.log("Error in EditPosts controller", error.message)
        res.status(500).json({success:false,message:"Interna; Server Error"})
    }
}

const DeletePosts = async(req,res)=>{
    let {id} = req.params
    try {
        const existingPost = await Posts.findById(id);
        
        if (!existingPost) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        
        if (!existingPost.author.equals(req.user._id)) {
            return res.status(403).json({ success: false, message: 'Unauthorized' });
        }
        let DeletePosts = await Posts.findByIdAndDelete(id)
        res.status(201).json({success:true,message:"Delete Successfully...",Delete:DeletePosts})
    } catch (error) {
        console.log("Error in EditPosts controller", error.message)
        res.status(500).json({success:false,message:"Interna; Server Error"})
    }
}
module.exports = {AddPost,AllPosts,SinglePosts,EditPosts,DeletePosts}