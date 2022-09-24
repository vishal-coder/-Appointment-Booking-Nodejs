import { client } from "../index.js";

export async function getDoctorByEmail(data) {
  return client.db("hospital").collection("doctors").findOne(data);
}

export async function fetchDoctorList() {
  return client.db("hospital").collection("doctors").find().toArray();
}

export function insertDoctor(data) {
  return client.db("hospital").collection("doctors").insertOne(data);
}

export function deleteDoctorByEmail(data) {
  return client.db("hospital").collection("doctors").deleteOne(data);
}
