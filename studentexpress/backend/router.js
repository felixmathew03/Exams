import { Router } from 'express'
import * as student from './requestHandler.js'

const router=Router();

router.route('/addstudent').post(student.addStudent);
router.route('/getstudents').get(student.getStudents);
router.route('/getstudent/:_id').get(student.getStudent);
router.route('/editstudent/:_id').post(student.editStudent);

export default router;