import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
  },
  user:{type:mongoose.Types.ObjectId,ref:"User"},
  email: {
    type: String,
    // required: [true, "Please provide email address"],
    // unique: true,
    // match: [
    //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   "Please provide a valid email",
    // ],
  },
  mobile: {
    type: String,
    // unique: [true, "Mobile number Already Exists"],
    // required: [true, "Please Provide Mobile Number"],
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
});

appointmentSchema.statics.isThisPatientExist = async function (patient) {
    // if (!patient) throw new Error('Invalid Email');
    try {
      const patient = await this.findOne({ patientName });
      if (patient) return false;
  
      return true;
    } catch (error) {
      console.log('error inside isThisEmailInUse method', error.message);
      return false;
    }
  };

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;
