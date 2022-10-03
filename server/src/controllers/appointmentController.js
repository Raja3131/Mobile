import { response } from "express";
import Appointment from "../models/appointmentModel.js";
import User from "./../models/userModel.js";

export const getAppointment = async (req, res) => {
  const { id } = req.params;
  console.log(id)
 try {
  const Appointments= await User.findById(id).populate("appointment")
  .then((appointment) => res.json(appointment.appointment));
  
 } catch (error) {
  res.json(error);
 }
};

export const createAppointment = async (req, res) => {
  const { id } = req.params;
  const {
    patientName,
    email,
    mobile,
    address,
    district,
    pincode,
    services,
    additionalServices,
    date,
    time,
  } = req.body;
  try {
    // const existingPatient = await User.isThisPatientInUse(patientName);
    // console.log(existingPatient);

    // if (!existingPatient) {
    //   return res.json({
    //     success: false,
    //     message: "Patient Already Appointed",
    //   });
    // }
    const newAppointment = {
      patientName,
      email,
      mobile,
      address,
      district,
      pincode,
      services,
      additionalServices,
      date,
      time,
    };
    const patient = await User.findByIdAndUpdate(id, {
      $push: { appointment: newAppointment },
    });
    await patient.save();
    res.status(201).json({
      status: 201,
      data: patient,
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};
