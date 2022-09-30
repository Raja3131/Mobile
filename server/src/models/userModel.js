import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  appointment: [{
    patientName: {
      type: String,
    },
    user:{type:mongoose.Types.ObjectId,ref:"User"},
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
      unique: [true, "Mobile number Already Exists"],
      required: [true, "Please Provide Mobile Number"],
    },
    address: {
      type: String,
    },
    district: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    services: {
      type: String,
    },
    additionalServices: {
      type: String,
    },
    timeToCall: {
      type: Date,
    },
    date: {
      type: Date,
    },
    time: {
      type: Date,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
    isCancelled: {
      type: Boolean,
      default: false
    },
    isClosed: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      default: false
  
    }
  }],
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
  newPassword: {
    type:String,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  
  tokens: [{ type: Object }],
  
},
{
  timestamps: true
}
);
// userSchema.pre("save", async function (next) {
// try {
//   const salt =await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(this.password,salt)
//   this.password =hashedPassword
//   next()
//   console.log(this.password)
// } catch (error) {
//   console.log(error)
// }
 
// });
// userSchema.methods.comparePassword = async function (password) {
//   if (!password) throw new Error('Password is mission, can not compare!');

//   try {
//     const result = await password===this.password
    
//     return result;
//   } catch (error) {
//     console.log('Error while comparing password!', error.message);
//   }
// };


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
    console.log('error inside isThisMobileInUse method', error.message);
    return false;
  }
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};

const User = mongoose.model('User', userSchema);
export default User;
