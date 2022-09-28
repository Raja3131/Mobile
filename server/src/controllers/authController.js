import { ErrorResponse } from "../utils/errorResponse.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

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
        message: "This email is already in use",
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
    const user = await User.findOne({ mobile });

    if (!user) {
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
        message: "Incorrect Password",
      });
    }
    const token = jwt.sign({ userId: user._id },'raja', {
      expiresIn: "1h",
    });

    let oldTokens = user.tokens || [];

    if (oldTokens.length) {
      oldTokens = oldTokens.filter((t) => {
        const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000;
        if (timeDiff < 86400) {
          return t;
        }
      });
    }

    await User.findByIdAndUpdate(user._id, {
      tokens: [...oldTokens, { token, signedAt: Date.now().toString() }],
    });

    return res.status(200).json({ status:200,success: true, user: user, token });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
      error: "error",
    });
  }
};

export const LogOut = async (req, res) => {
  try {
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ success: false, message: "Authorization fail!" });
      }

      const tokens = req.user.tokens;

      const newTokens = tokens.filter((t) => t.token !== token);

      await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
      res.json({ success: true, message: "Sign out successfully!" });
    }
  } catch (error) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Authorization fail!",
        error: error.message,
      });
  }
};

export const updateAuth = async(req,res,next) =>{
const {id} = req.params
const {firstName,lastName,email,mobile} = req.body
try {
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No User with id: ${id}`);
  const updatedAuth = {firstName,lastName,email,mobile,_id:id}
  await User.findByIdAndUpdate(id,updatedAuth,{new:true}) 
  res.status(200).json({
    data:updatedAuth,
  })
} catch (error) {
  res.status(400).json({
    error:error
  })
}
}

export const changePassword = async(req, res) => {
  const {id} =req.params
  const {password,newPassword,confirmNewPassword} = req.body
try {
  const user = await User.findOne({ id });
  // const isMatch = await user.comparePassword(password);
  if (!password===user.password) {
    return res.json({
      status: 400,
      success: false,
      message: "Incorrect Old Password",
    });
  }
  const newerPassword = {password: newPassword,confirmPassword:newPassword,_id:id};
  await User.findByIdAndUpdate(id, newerPassword,{new:true});

 res.status(200).json({
    data:newerPassword,
  })

  
} catch (error) {
  res.status(400).json({
    error:error
  })
}
}
