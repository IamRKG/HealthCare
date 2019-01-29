const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    patientID:Number,
    patientName:String,
    age:Number,
    contactNo:Number,
    IPNo:Number,
    bloodGroup:String,
    address:String,
    emailAddress:String,
    doctorName:String,
    speciality:String,
    paitentClinicalHistory:String,
    treatmentsProcedures:String,
    diagnosisProvisional:String,
    notes:String,
    treatment:String,
    investigation:String,
    reviewAdvise:String,
    amount:Number,
    consent:String
});

const patient = mongoose.model('Patient',patientSchema);

module.exports = patient;



