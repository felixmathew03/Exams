import { Router } from "express";
import * as employ from './requestHandler.js'

const router=Router();

router.route('/getemployees').get(employ.getEmployees);
router.route('/addemp').post(employ.addEmp);
router.route('/getemploy/:_id').get(employ.getEmploy);
router.route('/editemploy/:_id').put(employ.editEmploy);
router.route('/deleteemploy/:_id').delete(employ.deleteEmploy);

export default router;