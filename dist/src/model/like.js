"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const mongoose_1 = require("mongoose");
const likeSchema = new mongoose_1.Schema({
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post'
    },
    userId: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User'
        }]
});
const Like = (0, mongoose_1.model)('Like', likeSchema);
exports.Like = Like;
