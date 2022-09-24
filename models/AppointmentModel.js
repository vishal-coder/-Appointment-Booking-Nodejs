import { client } from "../index.js";

export async function fetchAppointmentList(data) {
  return client.db("hospital").collection("appointments").find(data).toArray();
}

export async function ifDuplicateAppointment(data) {
  return client.db("hospital").collection("appointments").find(data).toArray();
}

export function insertAppointment(data) {
  return client.db("hospital").collection("appointments").insertOne(data);
}

export function deleteAppointmentByEmail(data) {
  return client.db("hospital").collection("appointments").deleteOne(data);
}

export function updateAppointmentById(data, status) {
  return client
    .db("hospital")
    .collection("appointments")
    .updateOne(data, { $set: { status: status } });
}
