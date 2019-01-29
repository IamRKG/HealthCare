import { Injectable } from '@angular/core';
import {Patients} from "../patientInterface/patientsInterface";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class UpdatePatientSharedServiceService {

  selectedPatient: Patients;

  constructor() { }

  getPatient(){
    return new Observable((observer) =>{
      observer.next(this.selectedPatient);
    });
  }
}
