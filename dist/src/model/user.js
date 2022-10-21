"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    dob: String,
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dnboldv5r/image/upload/v1632958381/probook/avatar_ism2fu.png'
    },
    background: {
        type: String,
        default: 'https://res.cloudinary.com/dnboldv5r/image/upload/v1632958083/probook/i_Ocean-Quote-Twitter-_20Header_full_ap6zgw.jpg'
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
