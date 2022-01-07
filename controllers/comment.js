const comment = require("../models/comment")



exports.addComment = async (req,res)=>{
    try {
        const newComment = new comment(req.body);
        await newComment.save();
        res.status(200).send({msg:"new comment",newComment});
    } catch (error) {
        res.status(500).send({msg:"could not add comment",error});
    }
}

exports.GetComment = async (req,res)=>{

    try {
        const listOfComment = await comment.find();
        res.status(200).send({msg:"list of comment",listOfComment});

    } catch (error) {
        res.status(500).send({msg:"could not get comments",error});
    }
}
exports.UpdateComment = async (req,res)=>{
    const {id}=req.params
    try {
        const commentUpdated = await comment.findByIdAndUpdate({id,$set:{...req.body}})
        res.status(200).send({msg:"comment updated ",commentUpdated})
    } catch (error) {
        res.status(500).send({msg:"could not update this comment",error})
    }
}
exports.DeleteComment = async (req,res)=>{
    const {id}=req.params
    try {
        const commentDeleted = await comment.findByIdAndDelete(id);
        res.status(200).send({msg:"comment deleted",commentDeleted});
    } catch (error) {
        res.status(500).send({msg:"could not delete this comment",error})
    }
}