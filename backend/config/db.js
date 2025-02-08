import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://mutumabrian:<Bm0757551682>@cluster0.tou6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=> console.log("DB Connected"));

}