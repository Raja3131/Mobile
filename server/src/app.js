import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Validate from 'express-validator'
import authRouter from './routes/authRoutes.js'
import appointRouter from './routes/appointRoutes.js'
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
const connectDBandStartServer = async () => {
    try {
      mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
      console.log("MongoDB Connected");
      app.listen(process.env.PORT, () => {
        console.log(`Server started on port 5000`);
      });
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  connectDBandStartServer();
  app.use('/',authRouter)
  app.use('/',appointRouter);
  app.use(function(err, req, res, next) {
    // specific for validation errors
    if (err instanceof Validate.ValidationError)
      return res.status(err.status).json(err);
  
    // other type of errors, it *might* also be a Runtime Error
    return res.status(500).send(err.stack);
  });