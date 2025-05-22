import mongoose from "../config/db.connect.js";


const serviceSchema = new mongoose.Schema({
    iconUrl: { type: String, default: null },
    description: { type: String, required: true },
    imgUrl: { type: String, default: null },
    title:{type:String,required:true}
   
},{timestamps:true,versionKey:false});

const Service = mongoose.model("service", serviceSchema);

export default Service