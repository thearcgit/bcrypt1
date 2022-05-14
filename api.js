import express from "express"
import bodyParser from "body-parser"
import dbConnect from "./connection/connect.js"
import web from "./route/employeeRoute.js"
import dotenv from "dotenv"
dotenv.config()

// creating instance of express method....
const app = express()

// Initializing a port number and database address....
const port = process.env.PORT || 8000
const database = process.env.dbName

// middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) 
app.use('/employee',web)


// database connection.........
dbConnect(database)

// creating server......
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
