import { Request, Response } from 'express';
import Comment from '../../model/comment';
class commentController {
    getCommentByPostId = async (req: any, res: Response) => {
        try {
            let id = req.params.id;
            
            const comments = await Comment.find({postId:id}).populate('userId')
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }
    getComment = async (req: any, res: Response) => {
        try {
            // let id = req.params.id;
            const comments = await Comment.find()
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }


    addComment = async (req: any, res: Response) => {
        try {
            let newComment = req.body;
            newComment.userId = await Comment.create(newComment);
            res.status(200).send(newComment);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }
    updateComment = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let updateComment = await Comment.findOneAndUpdate({ id: id }, { $set: req.body });
            res.status(200).json(updateComment);
        } catch (error) {
            res.status(500).json(error);
        }
    };
    deleteComment = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let deleteComment = await Comment.findByIdAndDelete(id);
            res.status(200).json(deleteComment);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new commentController();