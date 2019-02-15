const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientID:Number,
  patientName:String,
  age:Number,
  sex:String,
  patientInTime:String,
  dob:String,
  bloodGroup:String,
  contactNo:Number,
  patientAddress:String,
  emailAddress:String,
  doctorName:String,
  speciality:String,
  patientHeight:String,
  patientWeight:String,
  patientBP:String,
  patientPulse:String,
  patientTemperature:String,
  patientSPO:String,
  patientRP:String,
  patientClinicalHistory:String,
  diagnosisProvisional:String,
  treatmentsProcedures:String,
  notes:String,
  treatment:String,
  investigation:String,
  review:String,
  amount:Number
});

const patient = mongoose.model('Patient',patientSchema);

module.exports = patient;



