import { ErrorResponse } from "../utils/errorResponse.js";
import User from "./../models/userModel.js";

export const Register = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    city,
    password,
    confirmPassword,
  } = req.body;
  try {
    const newUser = await User.isThisEmailInUse(email);
    if (!newUser)
      return res.json({
        success: false,
        message: "This email is already in use, try sign-in",
      });
    const newMobile = await User.isThisMobileInUse(mobile);
    if (!newMobile) {
      return res.json({
        success: false,
        message: "This Mobile is already in use, try sign-in",
      });
    }
    const user = await User({
      firstName,
      lastName,
      email,
      mobile,
      city,
      password,
      confirmPassword,
    });
    await user.save();
    res.status(201).json({
      status: 201,
      data: user,
    });
    console.log(user);
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export const Login = async (req, res) => {
  const { password, mobile } = req.body;

  try {
    const user = await User.findOne({ mobile  });
    
  
    if (!user){
      return res.json({
        status: 400,
        success: false,
        message: "User not found, try sign-up",
      });
      
    }
     

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.json({
        status: 400,
        success: false,
        message: "Password doesn't match",
      });
    }
    if (user) {
      res.status(200).json({
        status: 200,
        data: user,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      error: "error",
    });
  }
};
