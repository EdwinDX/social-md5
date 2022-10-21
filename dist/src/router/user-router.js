"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileRouter = void 0;
const express_1 = require("express");
const user_api_1 = __importDefault(require("../controller/api/user.api"));
const auth_1 = require("../middleware/auth");
exports.userProfileRouter = (0, express_1.Router)();
exports.userProfileRouter.get('', user_api_1.default.getAllUsers);
exports.userProfileRouter.get('/detail/:id', user_api_1.default.getSingleUser);
exports.userProfileRouter.post('', user_api_1.default.createUser);
exports.userProfileRouter.put('/:id', user_api_1.default.updateUser);
exports.userProfileRouter.get('/username', user_api_1.default.getSingleUserByUsername);
exports.userProfileRouter.get('/getUserToLocalstorage', auth_1.auth, user_api_1.default.getUserToLocalStorage);
//update
