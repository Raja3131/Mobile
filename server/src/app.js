import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'
const app = express()
app.use(express.json())
app.use(cors())
const connectDBandStartServer = async () => {
    try {
      mongoose.connect('mongodb://localhost:27017/mobile', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
      console.log("MongoDB Connected");
      app.listen(5000, () => {
        console.log(`Server started on port 5000`);
      });
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  connectDBandStartServer();
  app.use('/',userRouter)