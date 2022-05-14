import employeeModel from "../model/employeeModel.js"
import bcrypt from "bcrypt"


class employeeController{
    // Creating Document....
    static createDoc = async (req,res) => {
        const hashpass = await bcrypt.hash(req.body.password,10) 
        try {
            const user = new employeeModel({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                age:req.body.age,
                email:req.body.email,
                password:hashpass
            })
            const result = await user.save()
            res.status(201).json({
                msg:"document is created",
                document:result
            })
            console.log(result)           
                                    
        } catch (error) {
            console.log(error)            
        }    

    }
    
}

export default employeeController