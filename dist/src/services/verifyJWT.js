"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
function verifyToken(req, res) {
    let authorization = req.headers.authorization;
    let accessToken = authorization.split(' ')[1];
    jsonwebtoken_1.default.verify(accessToken, auth_1.SECRET_KEY, (err, data) => {
        if (err) {
            res.status(401).json({
                error: err.message,
                message: 'you are anonymous'
            });
        }
        else {
            return data;
        }
    });
}
exports.default = verifyToken;
