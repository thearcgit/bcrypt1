import express from "express"
import bodyParser from "body-parser"
import dbConnect from "./connection/connect.js"
import web from "./route/employeeRoute.js"
import logger from "morgan"
import dotenv from "dotenv"
dotenv.config()

// creating instance of express method....
const app = express()
// console.clear()
// Initializing a port number and database address....
const port = process.env.PORT || 8000
const database = process.env.dbName

// middleware
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) 
app.use('/employee',web)

// Cross Origin Resource Sharing......
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","*")
    if(res.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,PATCH,GET,POST,DELETE')
        return res.status(200).json({})
    }
})
// Error Handling.......
app.use((req,res,next) => {
    let error = new Error('Not Found')
    error.status = 404
    next(error)   
})

app.use((error,req,res,next) => {
    res.status(error.status || 500).json({
        error:{
            message:error.status
        }
    })
})


// database connection.........
dbConnect(database)

// creating server......
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
