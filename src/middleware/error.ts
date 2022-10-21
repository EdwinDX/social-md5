import fs from'fs';
import {NextFunction, Request, Response} from "express";
export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    fs.writeFile('./log.txt',err.message,function (err){
        if(err){
            return console.log(err)
        }
        console.log('the file was saved')
    });
    res.status(400).json({
        errorCode:400,
        messege:err.message
    })
}