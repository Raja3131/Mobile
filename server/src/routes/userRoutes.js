import express from 'express'
import { Register,Login } from '../controllers/userController.js'
import signUpValidator from '../validation/userValidation.js'

const userRouter = express.Router()
userRouter.post('/register',signUpValidator, Register)
userRouter.post('/login', Login) 

export default userRouter