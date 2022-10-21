import { Schema, model } from "mongoose";
const postSchema = new Schema({
    text: {
        type: String,
        // required: true,
        minlength: 1,
        maxlength: 280,
    },
    image: 
        {
            type: String,
            default: 'https://res.cloudinary.com/dnboldv5r/image/upload/v1632958083/probook/i_Ocean-Quote-Twitter-_20Header_full_ap6zgw.jpg'
        }
    ,
    video: 
        {
            type: String,
        }
    ,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // status:{
    //     type: String,
    // },

}, { timestamps: true })

const Post = model('Post', postSchema);
export default Post;
