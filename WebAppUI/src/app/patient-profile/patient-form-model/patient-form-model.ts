import {FormGroup, FormControl} from '@angular/forms'
import {Patients} from "../patientInterface/patientsInterface";
import {PatientConstractor} from "../patient-constractor/patient-constractor";
import {PatientValidator} from "../../validator/patient-validator";

export class PatientFormModel {

  constructor(){}

  getPatientFormModel(patient:Patients){
    const patientConstractor = new PatientConstractor(patient)
    const patientValidator = new PatientValidator();
    return new FormGroup({
      patientID: new FormControl(patientConstractor.value.patientID, [
        patientValidator.require,
        patientValidator.notAllowFistLetterZero,
        patientValidator.min,
        patientValidator.max]),
      patientName: new FormControl(patientConstractor.value.patientName,patientValidator.require),
      age: new FormControl(patientConstractor.value.age,patientValidator.require),
      sex: new FormControl(patientConstractor.value.sex, patientValidator.require),
      patientInTime: new FormControl(patientConstractor.value.patientInTime, patientValidator.require),
      dob: new FormControl(patientConstractor.value.dob, patientValidator.require),
      bloodGroup: new FormControl(patientConstractor.value.bloodGroup, patientValidator.require),
      contactNo: new FormControl(patientConstractor.value.contactNo, patientValidator.require),
      patientAddress: new FormControl(patientConstractor.value.patientAddress, patientValidator.require),
      emailAddress: new FormControl(patientConstractor.value.emailAddress, patientValidator.require),
      doctorName: new FormControl(patientConstractor.value.doctorName, patientValidator.require),
      speciality: new FormControl(patientConstractor.value.speciality, patientValidator.require),
      patientHeight: new FormControl(patientConstractor.value.patientHeight, patientValidator.require),
      patientWeight: new FormControl(patientConstractor.value.patientWeight, patientValidator.require),
      patientBP: new FormControl(patientConstractor.value.patientBP, patientValidator.require),
      patientPulse: new FormControl(patientConstractor.value.patientPulse, patientValidator.require),
      patientTemperature: new FormControl(patientConstractor.value.patientTemperature, patientValidator.require),
      patientSPO: new FormControl(patientConstractor.value.patientSPO, patientValidator.require),
      patientRP: new FormControl(patientConstractor.value.patientRP, patientValidator.require),
      patientClinicalHistory: new FormControl(patientConstractor.value.patientClinicalHistory, patientValidator.require),
      diagnosisProvisional: new FormControl(patientConstractor.value.diagnosisProvisional, patientValidator.require),
      treatmentsProcedures: new FormControl(patientConstractor.value.treatmentsProcedures, patientValidator.require),
      notes: new FormControl(patientConstractor.value.notes, patientValidator.require),
      treatment: new FormControl(patientConstractor.value.treatment, patientValidator.require),
      investigation: new FormControl(patientConstractor.value.investigation, patientValidator.require),
      review: new FormControl(patientConstractor.value.review, patientValidator.require),
      amount: new FormControl(patientConstractor.value.amount, patientValidator.require)
    });
  }
}
