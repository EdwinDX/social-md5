"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_api_1 = __importDefault(require("../controller/api/auth.api"));
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/register', auth_api_1.default.register);
exports.authRouter.post('/login', auth_api_1.default.login);
