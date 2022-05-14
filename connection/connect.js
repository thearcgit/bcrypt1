import mongoose from "mongoose";

// establishing connection..........

const dbConnect = async (dbms) => {
    try {
        await mongoose.connect(dbms)
    console.log(`connectin established.....`)
        
    } catch (error) {
        console.log(error)
        
    }    

}

export default dbConnect