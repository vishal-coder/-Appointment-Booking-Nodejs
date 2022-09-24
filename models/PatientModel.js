export async function getPatientByEmail(data) {
  return client.db("hospital").collection("patients").findOne(data);
}

export async function fetchPatientList() {
  return client.db("hospital").collection("patients").find();
}

export function insertPatient(data) {
  return client.db("hospital").collection("patients").insertOne(data);
}

export function deletePatientByEmail(data) {
  return client.db("hospital").collection("patients").deleteOne(data);
}
