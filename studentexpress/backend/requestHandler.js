import studentSchema from './models/student.model.js'

export async function addStudent(req,res) {
    try {
        const {...student}=req.body;
        const data=await studentSchema.create({...student});
        return res.status(201).send({msg:"Student details successfully added"})
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}

export async function getStudents(req,res) {
    try {
        const students=await studentSchema.find();
        return res.status(200).send(students);
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}

export async function getStudent(req,res) {
    try {
        const {_id}=req.params;
        const student=await studentSchema.findOne({_id});
        return res.status(200).send(student);
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}

export async function editStudent(req,res) {
    try {
        const {_id}=req.params;
        const {...student}=req.body;
        const data=await studentSchema.updateOne({_id},{$set:{...student}});
        return res.status(201).send({msg:"Student details successfully edited"})
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}