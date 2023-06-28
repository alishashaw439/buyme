import mongoose from "mongoose";

const schema = new mongoose.Schema({
    category:{
        type:String,
        required:[true,"Please enter category"]
    }
});

export const User = mongoose.model("Category",schema)
