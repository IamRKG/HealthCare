import { PatientListComponent } from "./patient-list.component";
import { Patients } from "../patientInterface/patientsInterface";
import { asyncData } from "../../../../testing";

//Mock Data
const patients: Patients[] = [
  {
    patientID: 5545,
    patientName: "Test",
    age: 125,
    sex: "test",
    patientInTime: 123,
    dob: "test",
    bloodGroup: "test",
    contactNo: 123,
    patientAddress: "test",
    emailAddress: "test",
    doctorName: "test",
    speciality: "test",
    patientHeight: "test",
    patientWeight: "test",
    patientBP: "test",
    patientPulse: "test",
    patientTemperature: "test",
    patientSPO: "test",
    patientRP: "test",
    patientClinicalHistory: "test",
    diagnosisProvisional: "test",
    treatmentsProcedures: "test",
    IPNo: 123,
    notes: "test",
    treatment: "test",
    investigation: "test",
    review: "test",
    amount: 123
  }
];
const mockAddPatientServices: any = { getPatient: jest.fn() };
mockAddPatientServices.getPatient.mockReturnValue(asyncData(patients));

const patientListComponent = new PatientListComponent(mockAddPatientServices);

//mockAddPatientServices.getPatient();

it("should defind patientListComponent", () => {
  expect(patientListComponent).toBeDefined();
});

it("should display patient when page load first", () => {
  patientListComponent.showPatientList();
  mockAddPatientServices.getPatient.mock.results[0].value.subscribe(data =>
    expect(data).toEqual(patients)
  );
});
