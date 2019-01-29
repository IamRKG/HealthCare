import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patients } from '../patientInterface/patientsInterface'
import {Observable} from 'rxjs';
import {BASE_URL} from "../../../config/config";
import {endpoint} from "../../constant/endpoint"
import {map} from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class PatientAddService {
  constructor(private http:HttpClient,@Inject(BASE_URL) private baseUrl)  { }
  getPatient():Observable<Patients[]>  {
    return this.http.get<Patients[]>(`${this.baseUrl}${endpoint.patients}`);
  }

  addPatient(patientObj) {
    return this.http.post(`${this.baseUrl}${endpoint.patients}`,patientObj,httpOptions).pipe(map( res => res));
  }

  searchPatient(patientId) {
     return this.http.get(`${this.baseUrl}${endpoint.search}${'?patientID='+patientId}`);
  }

  updatePatient(updatepatientObj){
    return this.http.put(`${this.baseUrl}${endpoint.patients}`,updatepatientObj,httpOptions).pipe(map(res => res));
  }
}

