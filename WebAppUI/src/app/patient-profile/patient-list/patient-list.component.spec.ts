import { PatientListComponent } from './patient-list.component';
import {Patients} from "../patientInterface/patientsInterface";
import { asyncData } from '../../../../testing/async-observable-helpers';

//Mock Data
const patients:Patients[] =  [{
  "patientID": 10012,
  "patientName": "Test01",
  "age": 100,
  "contactNo": 12345678,
  "bloodGroup": "O",
  "emailAddress": "Gujvfd",
  "speciality": "Gjjfd",
  "treatmentsProcedures": "Winshns",
  "diagnosisProvisional": "Jnqb",
  "notes": "Wynsyjs",
  "treatment": "Winshns",
  "investigation": "Ajmznnx",
  "amount": 182772,
  "IPNo": null,
  "address": null,
  "consent": null,
  "doctorName": null,
  "paitentClinicalHistory": null,
  "reviewAdvise": null
}];


/*class MockPatientAddService {
  arrList:any;
  mock:any;
  constructor(...args){
    this.arrList = args;
    this.mock = {
      calls:[]
    }
  }

  getCalls(){
    this.mock.calls.push(this.arrList);
    return this.mock.calls
  }

  getPatient(){
    return patients;
  }
}

const mockpatientAddService = new MockPatientAddService('http','baseURL');
*/

let mservice: any;

mservice = jasmine.createSpyObj('mockpatientAddService',['getPatient']);

const patientListComponent = new PatientListComponent(mservice);

mservice.getPatient.and.returnValue(asyncData(patients));


it('should defind patientListComponent',() => {

  expect(patientListComponent).toBeDefined();
});


fit('should return patients' ,() => {
  expect(patientListComponent.showPatientList()).toEqual(patients)

});

