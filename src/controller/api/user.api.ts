import { NextFunction, Request, Response } from "express";
import { User } from "../../model/user";
import { parse } from "path";

class UserController {
  //update
  getAllUsers = async (req: Request, res: Response) => {
    let Users = await User.find();
    res.status(200).json(Users);
  };

  getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
    let id = req.params.id;
    try {
      let user = await User.findById(id);
      if (!user) {
        res.status(404).json();
      } else {
        res.status(200).json(user);
      }
    } catch (err) {
      next(err);
    }
  };
  
  getSingleUserByUsername = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let username = req.query.username;
    try {
      let user = await User.find({ username: username });
      if (!user) {
        res.status(404).json();
      } else {
        res.status(200).json(user);
      }
    } catch (err) {
      next(err);
    }
  };

  getUserToLocalStorage = async (
    req: any,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let id = req.decoded.id;
      let user = await User.findById(id);
      if (!user) {
        res.status(404).json();
      } else {
        res.status(200).json(user);
      }
    } catch (err) {
      next(err);
    }
  };
  // getSingleUserByEmail = async (req:Request,res:Response,next:NextFunction)=>{
  //
  //     let email = req.body.email
  //     try{
  //         let user = await User.findOne({email:email});
  //         if(!user){
  //             res.status(404).json();
  //         }else {
  //             res.status(200).json(user)
  //         }
  //     }catch (err){
  //         next(err)
  //     }
  // }
  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = req.body;
      user = await User.create(user);
      let newUser = await User.findById(user._id);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  };

  updateUser = async (req: Request, res: Response) => {
    let id = req.params.id;
    let user = await User.findById(id);
    if (!user) {
      res.status(404).json();
    } else {
      let data = req.body;
      await User.findOneAndUpdate({ _id: id }, data);
      data._id = id;
      user = await User.findById(id);
      res.status(200).json(user);
    }
  };
}
export default new UserController();
