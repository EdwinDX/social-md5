
import { Schema, model } from "mongoose";
const likeSchema = new Schema({
    postId:{
        type:Schema.Types.ObjectId,
        ref:'Post'
    },
    userId:[{
      type:Schema.Types.ObjectId,
      ref:'User'
    }]
})
const Like = model('Like',likeSchema);
export {Like};
