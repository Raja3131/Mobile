import User from './../models/userModel.js';

export const Register = async (req,res) => {
try {
    const newUser = new User(req.body)
    if(isUserExist){
      res.status(403).json({
        status:400,
      success: false,
      message: "User Already exists",
      })
    }
    await newUser.save();
    res.status(201).json({
        status: 201,
        data: newUser,
      });
    
    
} catch (error) {
    return res.status(400).json({
        status: 400,
        message: error.message,
      });
}    
}

export const Login = async(req, res) => {
    const { email, password } = req.body;
   try {
    const user = await User.findOne({ email });
    if (!user)
    return res.json({
      status:400,
      success: false,
      message: "User not found, try sign-up",
    });
    if(user){
        res.status(200).json({
            status: 200,
            data: user.email,
            
          });
    }
   } catch (error) {
    return res.status(400).json({
        status: 400,
        message: error.message,
        error: "error"
      });
   }
}

   

