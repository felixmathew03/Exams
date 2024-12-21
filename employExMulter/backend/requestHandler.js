import employSchema from './models/employ.model.js';
import {promises as fs} from "fs"
import {fileURLToPath} from "url"
import {dirname,join} from "path"

export async function getEmployees(req,res) {
    try {
        const employees=await employSchema.find();
        return res.status(200).send(employees)
    } catch (error) {
        return res.status(404).send({msg:"error"})
    }
}
export async function addEmp(req,res){
    try{
        const photo = req.file;
        const{name,email,salary,designation}=req.body;
        await employSchema.create({name,email,salary,designation,photo});
        res.status(201).send({msg:"data added successfully"})
    }catch(error){
        res.status(404).send({msg:"error"})
    }
}

export async function getEmploy(req,res) {
    try {
        const {_id}=req.params
        const data=await employSchema.findOne({_id});
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
}
export async function editEmploy(req,res) {
    try {
        const photo = req.file;
        const {_id}=req.params;
        const {name,email,salary,designation}=req.body;

        const employ=await employSchema.findOne({_id});
        if(!employ)
            return res.status(500).send({msg:"employ not available"});
        //get current file directory
        const __filename=fileURLToPath(import.meta.url)
        const __dirname=dirname(__filename);
        const fullpath=join(__dirname,"/uploads/",employ.photo.filename)
        await fs.unlink(fullpath);
        const data=await employSchema.updateOne({_id},{$set:{name,email,salary,designation,photo}});
        res.status(201).send({msg:"data edited"});
    } catch (error) {
        res.status(404).send(error)
    }
    
}
export async function deleteEmploy(req,res) {
    try {
        const {_id}=req.params;
        const employ=await employSchema.findOne({_id});
        if(!employ)
            return res.status(500).send({msg:"employ not available"});
        //get current file directory
        const __filename=fileURLToPath(import.meta.url)
        console.log(__filename);
        const __dirname=dirname(__filename);
        console.log(__dirname);
        const fullpath=join(__dirname,"/uploads/",employ.photo.filename)
        console.log(fullpath);
        await fs.unlink(fullpath);
        await employSchema.deleteOne({_id}).then(()=>{
            res.status(200).send({msg:"deleted"})
        }).catch((error)=>{
            res.status(404).send({msg:"error1"});
        })
    } catch (error) {
        res.status(404).send({msg:"error2"})
    }   
}