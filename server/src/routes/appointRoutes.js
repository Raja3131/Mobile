import express from 'express'
import { getAppointment,createAppointment } from "../controllers/appointmentController.js";

const appointRouter = express.Router();

appointRouter.get('/appointment/:id',getAppointment)
appointRouter.post('/appointment/:id',createAppointment)

export default appointRouter