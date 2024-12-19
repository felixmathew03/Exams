import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    name:{type:String},
    class:{type:String},
    rno:{type:Number},
    place:{type:String},
    percentage:{type:Number}
});

export default mongoose.model.Students || mongoose.model("Student",studentSchema)