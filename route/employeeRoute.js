import  express from "express";
import employeeController from "../controller/employeeController.js";

const router = express.Router()

router.post('/',employeeController.createDoc)
router.get('/',employeeController.getDoc)
router.get('/:id',employeeController.getDocById)
router.get('/:firstName',employeeController.getDocName)
router.put('/:id',employeeController.updateDocById)
router.patch('/:id',employeeController.updateDocById)
router.delete('/:id',employeeController.deleteDocById)



export default router
