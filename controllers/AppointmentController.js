import {
  fetchAppointmentList,
  ifDuplicateAppointment,
  insertAppointment,
} from "../models/AppointmentModel.js";

export const scheduleAppointment = async (req, res) => {
  console.log("scheduleAppointment requested", req.body);
  const { bookedBy, slot, email, doctor_email, date, doctor_name } = req.body;

  const data = {
    doctor_name: doctor_name,
    doctor_email: doctor_email,
    bookedBy: bookedBy,
    date: date,
    slot: slot,
    status: "open",
    createdOn: new Date(),
  };
  console.log("appointment data", data);
  const checkdata = { doctor_email: doctor_email, date: date, slot: slot };

  const duplicate = await ifDuplicateAppointment(checkdata);
  console.log(duplicate);
  if (duplicate && duplicate.length > 0) {
    return res.status(200).send({
      message: "Appointment for selected slot not available",
      success: false,
    });
  }

  const result = await insertAppointment(data);
  if (!result) {
    return res.status(401).send({
      message: "Something went wrong..please try again later",
      success: false,
    });
  }

  res.status(200).send({
    message: "Appointment Booked Successfully",
    success: true,
  });
};

export const getAppointment = async (req, res) => {
  console.log("getAppointment requested", req.body);
  let data = {};
  const { userType, email } = req.body;
  if (userType != "admin") {
    data = { email: email };
  }

  const result = await fetchAppointmentList(data);
  if (!result) {
    return res.status(401).send({
      message: "Something went wrong..please try again later",
      success: false,
    });
  }

  res.status(200).send({
    message: "User was registered successfully! Please Verify Your Email!",
    success: true,
    list: result,
  });
};
