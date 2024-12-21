import mongoose from "mongoose";

const employSchema=new mongoose.Schema({
    name:{type:String},
    salary:{type:Number},
    email:{type:String},
    designation:{type:String},
    photo:{type:Object}
})

export default mongoose.model.Employs || mongoose.model("Employ",employSchema);