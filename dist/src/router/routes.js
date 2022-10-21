"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const friend_router_1 = require("./friend-router");
const express_1 = require("express");
const user_router_1 = require("./user-router");
const auth_router_1 = require("./auth-router");
const post_router_1 = __importDefault(require("./post-router"));
const like_router_1 = __importDefault(require("./like-router"));
const comment_router_1 = __importDefault(require("./comment-router"));
exports.router = (0, express_1.Router)();
exports.router.use("/users", user_router_1.userProfileRouter);
exports.router.use("/posts", post_router_1.default);
exports.router.use("/auth", auth_router_1.authRouter);
exports.router.use("", friend_router_1.friendRouter);
//LIKE ROUTER
exports.router.use('/likes', like_router_1.default);
//COMMENT ROUTER
exports.router.use('/comments', comment_router_1.default);
