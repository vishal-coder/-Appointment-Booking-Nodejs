import express from "express";
import {
  getAppointment,
  scheduleAppointment,
} from "../controllers/AppointmentController.js";
import {
  deleteDoctor,
  getDoctorList,
  registerDoctor,
} from "../controllers/DoctorController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("doctor route working");
});

router.post("/add", scheduleAppointment);
router.get("/all", getAppointment);
// router.delete("/delete", deleteDoctor);
// router.put("/update", deleteDoctor);

export const appointmentRouter = router;
