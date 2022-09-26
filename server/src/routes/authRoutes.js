import express from 'express'
import { Register,Login,LogOut } from '../controllers/authController.js'
import signUpValidator from '../validation/userValidation.js'
import { isAuth } from '../middleware/auth.js'

const authRouter = express.Router()
authRouter.post('/register',signUpValidator, Register)
authRouter.post('/login', Login) 
authRouter.post('/logout',isAuth,LogOut)

export default authRouter