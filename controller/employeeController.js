import employeeModel from "../model/employeeModel.js"
import bcrypt from "bcryptjs"


class employeeController{
    // Creating Document....
    static createDoc = async (req,res) => {
         
        try {
            const hashpass = await bcrypt.hash(req.body.password,10)
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
    // Retrieve Document......
    static getDoc = async (req,res) => {        
        try {
            const result = await employeeModel.find(req.params)
            res.status(200).json({
                msg:"documents are retrieved",
                document:result
            })
            console.log(result)           
                                    
        } catch (error) {
            res.status(404).json({
                msg:"oops an error is found",
                err:error
            })
            console.log(error)            
        }    

    }
    // Retrieve Document By Id............
    static getDocById = async (req,res) => {        
        try {
            const result = await employeeModel.findById(req.params.id)
            res.status(200).json({
                msg:"document is retrieved",
                document:result
            })
            console.log(result)           
                                    
        } catch (error) {
            res.status(404).json({
                msg:"oops an error is found",
                err:error
            })
            console.log(error)            
        }    

    }
    // Retrieve Document By Name............
    static getDocName = async (req,res) => {        
        try {
            const result = await employeeModel.findOne(req.params.firstName)
            res.status(200).json({
                msg:"document is retrieved",
                document:result
            })
            console.log(result)           
                                    
        } catch (error) {
            res.status(404).json({
                msg:"oops an error is found",
                err:error
            })
            console.log(error)            
        }    

    }

    // Update Document By Id............
    static updateDocById = async (req,res) => {        
        try {
            const result = await employeeModel.findByIdAndUpdate(req.params.id,req.body)
            res.status(200).json({
                msg:"Document is Updated",
                document:result
            })
            console.log(result)           
                                    
        } catch (error) {
            res.status(404).json({
                msg:"oops an error is found",
                err:error
            })
            console.log(error)            
        }    

    }

    // Delete Document By Id............
    static deleteDocById = async (req,res) => {        
        try {
            const result = await employeeModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                msg:"Document is Deleted",
                document:result
            })
            console.log(result)           
                                    
        } catch (error) {
            res.status(404).json({
                msg:"oops an error is found",
                err:error
            })
            console.log(error)            
        }    

    }
    
}

export default employeeController