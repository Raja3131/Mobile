import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  mobile: {
    type: String,
    unique:[true,"Mobile number Already Exists"],
    required:[true,"Please Provide Mobile Number"]
  },
  city: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
});
userSchema.pre("save", async function (next) {
try {
  const salt =await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(this.password,salt)
  this.password =hashedPassword
  next()
  console.log(this.password)
} catch (error) {
  console.log(error)
}
 
});
userSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error('Password is mission, can not compare!');

  try {
    const result = await bcrypt.compare(password, this.password);
    
    return result;
  } catch (error) {
    console.log('Error while comparing password!', error.message);
  }
};


userSchema.statics.isThisEmailInUse = async function (email) {
  if (!email) throw new Error('Invalid Email');
  try {
    const user = await this.findOne({ email });
    if (user) return false;

    return true;
  } catch (error) {
    console.log('error inside isThisEmailInUse method', error.message);
    return false;
  }
};
userSchema.statics.isThisMobileInUse = async function (mobile) {
  if (!mobile) throw new Error('Invalid mobile');
  try {
    const user = await this.findOne({ mobile });
    if (user) return false;

    return true;
  } catch (error) {
    console.log('error inside isThisEmailInUse method', error.message);
    return false;
  }
};

const User = mongoose.model('User', userSchema);
export default User;
