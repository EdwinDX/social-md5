import{Schema,model} from "mongoose";
const userSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name:String,
        dob:String,
        avatar: {
            type: String,
            default: 'https://res.cloudinary.com/dnboldv5r/image/upload/v1632958381/probook/avatar_ism2fu.png'
        },
        background: {
            type: String,
            default: 'https://res.cloudinary.com/dnboldv5r/image/upload/v1632958083/probook/i_Ocean-Quote-Twitter-_20Header_full_ap6zgw.jpg'
        }
    }
)

const User = model('User',userSchema);
export {User};