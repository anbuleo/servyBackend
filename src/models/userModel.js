import mongoose from "../config/db.connect.js";


const userSchema = new mongoose.Schema({
   
    firstName: {type:String,required:true},
    lastName: {type:String,default:null},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address:{type:String,default:null},
    mobile:{type:String,default:null},
    role:{type:String,default:"user"},
    imgUrl:{type:String,default:null},
    isVerified:{ type: Boolean, default: false },


    updatedAt: { type: Date, default: Date.now },
},{timestamps:true,versionKey:false});

export default mongoose.model("user", userSchema);
