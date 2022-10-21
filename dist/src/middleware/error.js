"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const fs_1 = __importDefault(require("fs"));
const errorHandler = (err, req, res, next) => {
    fs_1.default.writeFile('./log.txt', err.message, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('the file was saved');
    });
    res.status(400).json({
        errorCode: 400,
        messege: err.message
    });
};
exports.errorHandler = errorHandler;
