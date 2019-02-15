import { Component, OnInit} from '@angular/core';
import  {PatientFromFactory} from "../form-Controls/patient-from-factory";
import {UpdatePatientSharedServiceService} from "../sharedServices/update-patient-shared-service.service"
import {Patients} from "../patientInterface/patientsInterface";
import {PatientAddService} from "../patientServices/patient-add.service"
import { Router} from "@angular/router";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  updatePatientForm:any;
  patientNodeId:number;
  constructor(
    private updatePatientSharedServiceService:UpdatePatientSharedServiceService,
    private patientAddService:PatientAddService,
    private router:Router
  ) { }

  patientFromFactory = new PatientFromFactory;

  displayPatientDetails(){
    this.updatePatientSharedServiceService.getPatient().subscribe((patient:Patients) =>{
      this.patientNodeId = patient['_id']
      this.updatePatientForm = this.patientFromFactory.getPatientFormModel("updateForm").getPatientFormModel(patient);
    });
  }

  save(){
    if(this.updatePatientForm.valid) {
      this.updatePatientForm.value['_id'] = this.patientNodeId;
      this.patientAddService.updatePatient(this.updatePatientForm.value).subscribe(successMsg => {
        successMsg;
        this.router.navigate(['/patientList']);
      });

    }
  }

  ngOnInit() {
    this.displayPatientDetails()
  }


}
