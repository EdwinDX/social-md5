"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./../middleware/auth");
// import likeController from '../controller/api/like.api';
const like_api_1 = __importDefault(require("../controller/api/like.api"));
const routerLike = require('express').Router();
//LIKE POST
routerLike.post('/:id', auth_1.auth, like_api_1.default.like);
exports.default = routerLike;
