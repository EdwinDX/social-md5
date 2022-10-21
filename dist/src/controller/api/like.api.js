"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Post from 'src/model/post';
const like_1 = require("../../model/like");
class likeController {
    like(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const like = yield like_1.Like.findOne({ postId: req.params.id }).populate('userId');
                if (like) {
                    // ARRAY LIKED
                    let listUserLike = like.userId;
                    let idUserLike = req.decoded.id;
                    let index = -1;
                    try {
                        if (listUserLike) {
                            let statusUserLiked = false;
                            for (let i = 0; i < listUserLike.length; i++) {
                                if (listUserLike[i]._id == idUserLike) {
                                    statusUserLiked = true;
                                    index = i;
                                    break;
                                }
                            }
                            try {
                                if (statusUserLiked) {
                                    // DELETE
                                    listUserLike.splice(index, 1);
                                    res.status(200).json({ message: 'UnLike successfully', countLike: listUserLike.length });
                                }
                                else {
                                    // LIKE POST
                                    like.userId.push(idUserLike);
                                    res.status(200).json({ message: 'Like successfully', countLike: listUserLike.length });
                                }
                                yield like.save();
                            }
                            catch (error) {
                                res.status(500).json(error.message);
                            }
                        }
                    }
                    catch (error) {
                        res.status(500).json(error.message);
                    }
                }
                else {
                    // ARRAY LIKE IS NOT EXIST
                    let like = {
                        userId: req.decoded.id,
                        postId: req.params.id
                    };
                    yield like_1.Like.create(like);
                    res.status(200).json('Like successfully created');
                }
            }
            catch (error) {
                res.status(500).json(error.message);
            }
        });
    }
}
exports.default = new likeController;
