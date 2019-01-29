import {FormGroup, FormControl} from '@angular/forms'
import {Patients} from "../patientInterface/patientsInterface";
import {PatientConstractor} from "../patient-constractor/patient-constractor";

export class PatientFormModel {

  constructor(){}

  getPatientFormModel(patient:Patients){
    const patientConstractor = new PatientConstractor(patient)
    return new FormGroup({
      patientID: new FormControl(patientConstractor.value.patientID),
      patientName: new FormControl(patientConstractor.value.patientName),
      age: new FormControl(patientConstractor.value.age),
      sex: new FormControl(patientConstractor.value.sex),
      patientInTime: new FormControl(patientConstractor.value.patientInTime),
      dob: new FormControl(patientConstractor.value.dob),
      bloodGroup: new FormControl(patientConstractor.value.bloodGroup),
      contactNo: new FormControl(patientConstractor.value.contactNo),
      patientAddress: new FormControl(patientConstractor.value.patientAddress),
      emailAddress: new FormControl(patientConstractor.value.emailAddress),
      doctorsName: new FormControl(patientConstractor.value.doctorsName),
      speciality: new FormControl(patientConstractor.value.speciality),
      patientHeight: new FormControl(patientConstractor.value.patientHeight),
      patientWeight: new FormControl(patientConstractor.value.patientWeight),
      patientBP: new FormControl(patientConstractor.value.patientBP),
      patientPulse: new FormControl(patientConstractor.value.patientPulse),
      patientTemperature: new FormControl(patientConstractor.value.patientTemperature),
      patientSPO: new FormControl(patientConstractor.value.patientSPO),
      patientRP: new FormControl(patientConstractor.value.patientRP),
      patientClinicalHistory: new FormControl(patientConstractor.value.patientClinicalHistorys),
      diagnosisProvisional: new FormControl(patientConstractor.value.diagnosisProvisional),
      treatmentsProcedures: new FormControl(patientConstractor.value.treatmentsProcedures),
      notes: new FormControl(patientConstractor.value.notes),
      treatment: new FormControl(patientConstractor.value.treatment),
      investigation: new FormControl(patientConstractor.value.investigation),
      review: new FormControl(patientConstractor.value.review),
      amount: new FormControl(patientConstractor.value.amount)
    });
  }
}
