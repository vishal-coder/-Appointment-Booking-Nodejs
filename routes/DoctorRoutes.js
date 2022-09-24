import express from "express";
import {
  deleteDoctor,
  getDoctorList,
  registerDoctor,
} from "../controllers/DoctorController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("doctor route working");
});

router.post("/add", registerDoctor);
router.get("/all", getDoctorList);
router.delete("/delete", deleteDoctor);

export const doctorRouter = router;
