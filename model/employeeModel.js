import mongoose from "mongoose"

// creating a new schema....
const employeeSchema = new mongoose.Schema({
    firstName:{type:String,required:true,uppercase:true},
    lastName:{type:String,required:true,uppercase:true},
    age:{type:Number,required:true,min:18},
    email:{type:String,},
    password:{type:String},
    join:{type:Date,default:Date.now}
})


// creating a model....
const employeeModel = mongoose.model('employee',employeeSchema)

export default employeeModel