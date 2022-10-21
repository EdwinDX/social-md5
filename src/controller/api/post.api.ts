import { User } from "../../model/user";
import Post from "../../model/post";
import { Request, response, Response } from "express";
const validator = require("validator");

class postController {
  newPost = async (req: any, res: Response) => {
    try {
      let newPost = req.body;
      newPost.userId = req.decoded.id;
      if (!validator.isEmpty(newPost.text)) {
        let newsPost = await Post.create(newPost);
        res.status(200).json(newsPost);
      } else {
        res.status(500).json("Please enter something...!");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  getPostByUserId = async (req: any, res: Response) => {

    try {
      let userId = req.decoded.id;
      console.log(userId)
      const post = await Post.find({ userId: userId });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  getAllPost = async (req: any, res: Response) => {

    try {
      const post = await Post.find().sort({ createdAt: -1 }).populate('userId');;
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  //GET A POST
  getAPost = async (req: any, res: Response) => {
    try {
      let id = req.params.id;
      const post = await Post.findById(id).populate('userId');
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  updatePost = async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      let post = await Post.findById(id);
      await post?.updateOne({ $set: req.body });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  deleteAPost = async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      await Post.findByIdAndDelete(id);
      res.status(200).json(" Delete successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  };

  //GET A POST
  getPost = async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      const posts = await Post.find({ userId: id }).sort({ createdAt: -1 }).populate('userId');
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  //LIKE POST
  likeAPost = async (req: Request, res: Response) => {
    try {
      let id = req.params.id;
      console.log(id);
      let like = await Post.findOne({ _id: id });
      await like?.updateOne({ $pull: like });
      console.log(like);
      res.status(200).json(like);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}


export default new postController();
