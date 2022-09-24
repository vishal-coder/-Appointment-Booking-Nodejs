import {
  deleteDoctorByEmail,
  fetchDoctorList,
  getDoctorByEmail,
  insertDoctor,
} from "../models/DoctorModel.js";

export const registerDoctor = async (req, res) => {
  console.log("registerDoctor requested", req.body);
  const {
    firstname,
    lastname,
    phone,
    email,
    education,
    experience,
    department,
  } = req.body;

  const data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    education: education,
    experience: experience,
    department: department,
  };

  const doctorByEmail = await getDoctorByEmail({ email: email });

  if (doctorByEmail) {
    return res.status(401).send({
      message: "Doctor with same email already exists",
      success: false,
    });
  }
  const result = await insertDoctor(data);
  if (!result) {
    return res.status(401).send({
      message: "Something went wrong..please try again later",
      success: false,
    });
  }

  res.status(200).send({
    message: "User was registered successfully! Please Verify Your Email!",
    success: true,
  });
};

export const getDoctorList = async (req, res) => {
  console.log("getDoctorList requested");

  const result = await fetchDoctorList();

  if (!result) {
    return res.status(401).send({
      message: "Something went wrong..please try again later",
      success: false,
    });
  }

  res.status(200).send({
    message: "User was registered successfully! Please Verify Your Email!",
    success: true,
    doctors: result,
  });
};

export const deleteDoctor = async (req, res) => {
  console.log("getDoctorList requested");
  const { email } = req.body;

  const result = await deleteDoctorByEmail({ email: email });

  if (!result) {
    return res.status(401).send({
      message: "Something went wrong..please try again later",
      success: false,
    });
  }

  res.status(200).send({
    message: "User was registered successfully! Please Verify Your Email!",
    success: true,
  });
};
