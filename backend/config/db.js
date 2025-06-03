import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Sujanv:Sujanv2005@cluster-food-delivery-d.a6o9vh1.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

