import * as employ from './requestHandler.js';
import { Router } from "express";
import multer from "multer";
import path from "path";
const storage=multer.diskStorage({
    destination:"./uploads",
    filename:function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix  + '-' +file.originalname )
      }
})

const upload =multer({storage});

const router=Router();

router.route('/getemployees').get(employ.getEmployees);
router.route("/upload").post(upload.single('file'),employ.addEmp);
router.route("/image/:filename").get((req,res)=>{
    const {filename}=req.params;
    return res.sendFile(path.resolve(`./uploads/${filename}`))
});
router.route('/getemploy/:_id').get(employ.getEmploy);
router.route('/editemploy/:_id').put(upload.single('file'),employ.editEmploy);
router.route('/deleteemploy/:_id').delete(employ.deleteEmploy);

export default router;