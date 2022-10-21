"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../model/user");
class UserController {
    constructor() {
        //update
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let Users = yield user_1.User.find();
            res.status(200).json(Users);
        });
        this.getSingleUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let user = yield user_1.User.findById(id);
                if (!user) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(user);
                }
            }
            catch (err) {
                next(err);
            }
        });
        this.getSingleUserByUsername = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let username = req.query.username;
            try {
                let user = yield user_1.User.find({ username: username });
                if (!user) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(user);
                }
            }
            catch (err) {
                next(err);
            }
        });
        this.getUserToLocalStorage = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.decoded.id;
                let user = yield user_1.User.findById(id);
                if (!user) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(user);
                }
            }
            catch (err) {
                next(err);
            }
        });
        // getSingleUserByEmail = async (req:Request,res:Response,next:NextFunction)=>{
        //
        //     let email = req.body.email
        //     try{
        //         let user = await User.findOne({email:email});
        //         if(!user){
        //             res.status(404).json();
        //         }else {
        //             res.status(200).json(user)
        //         }
        //     }catch (err){
        //         next(err)
        //     }
        // }
        this.createUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let user = req.body;
                user = yield user_1.User.create(user);
                let newUser = yield user_1.User.findById(user._id);
                res.status(201).json(newUser);
            }
            catch (err) {
                next(err);
            }
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let user = yield user_1.User.findById(id);
            if (!user) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                yield user_1.User.findOneAndUpdate({ _id: id }, data);
                data._id = id;
                user = yield user_1.User.findById(id);
                res.status(200).json(user);
            }
        });
    }
}
exports.default = new UserController();
