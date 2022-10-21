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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = __importDefault(require("../../model/comment"));
class commentController {
    constructor() {
        this.getCommentByPostId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                const comments = yield comment_1.default.find({ postId: id }).populate('userId');
                res.status(200).json(comments);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        this.getComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // let id = req.params.id;
                const comments = yield comment_1.default.find();
                res.status(200).json(comments);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        this.addComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let newComment = req.body;
                newComment.userId = yield comment_1.default.create(newComment);
                res.status(200).send(newComment);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        this.updateComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let updateComment = yield comment_1.default.findOneAndUpdate({ id: id }, { $set: req.body });
                res.status(200).json(updateComment);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
        this.deleteComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let deleteComment = yield comment_1.default.findByIdAndDelete(id);
                res.status(200).json(deleteComment);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = new commentController();
