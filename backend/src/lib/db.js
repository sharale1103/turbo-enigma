import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
     
      const conn=      await mongoose.connect("mongodb+srv://sharale1103:ii.2002.ii@cluster0.c2wyu.mongodb.net/chat-db?retryWrites=true&w=majority&appName=Cluster0");   

      console.log('connect')


    } catch (error) {
        console.log(error)
    }
}