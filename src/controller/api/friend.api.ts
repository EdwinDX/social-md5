import { NextFunction, Request, Response } from "express";
import { Friend } from "../../model/friend";

class FriendController {
  addFriend = async (req: any, res: Response) => {
    let friend = {
        iduser : req.decoded.id,
        idfriend:req.params.id,
        status: 'pendding'
    }
    await Friend.create(friend)
    res.status(200).json()
  };
}
export default new FriendController();
