"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.commentSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Post"
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
const Comment = (0, mongoose_1.model)('Comment', exports.commentSchema);
exports.default = Comment;
