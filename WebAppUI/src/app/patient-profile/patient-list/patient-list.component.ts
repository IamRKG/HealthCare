import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientAddService} from "../patientServices/patient-add.service";
import {Patients} from "../patientInterface/patientsInterface"
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {UpdatePatientSharedServiceService} from "../sharedServices/update-patient-shared-service.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients:Patients[]
  searchValue:FormControl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientAddService:PatientAddService,
    private updatePatientSharedServiceService : UpdatePatientSharedServiceService
  ) {}

  showPatientList(){
     this.patientAddService.getPatient().subscribe( (patients:Patients[])  => {
       this.patients = patients;
     });
  }

  viewPatient(patient){
    this.patients.map((patients)=>{
      if(patients.patientID === patient){
        patient['_id'] = patients['_id'];
      };
    });
    this.updatePatientSharedServiceService.selectedPatient = patient;
    this.router.navigate(['/view']);
  }

  addPatient(){
    this.router.navigate(['/add']);
  }

  search(){
    this.searchValue = new FormControl('')
    this.searchValue.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged()
    ).subscribe((value) =>{
      this.patientAddService.searchPatient(value).subscribe((patients:Patients[]) =>{
        this.patients = patients
      })
    })

  }

  ngOnInit(){
   this.showPatientList();
    this.search()
  }
}

