"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    text: {
        type: String,
        // required: true,
        minlength: 1,
        maxlength: 280,
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/dnboldv5r/image/upload/v1632958083/probook/i_Ocean-Quote-Twitter-_20Header_full_ap6zgw.jpg'
    },
    video: {
        type: String,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    // status:{
    //     type: String,
    // },
}, { timestamps: true });
const Post = (0, mongoose_1.model)('Post', postSchema);
exports.default = Post;
