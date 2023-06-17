import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
       const {connection} = await mongoose.connect(process.env.MONGO_URI)
       console.log(`Server coonected to database ${connection.host}`)
    }catch (error){
        console.log("Some error occurred", error)
        process.exit(1)
    }
}