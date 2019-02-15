import {Component, OnInit} from '@angular/core';
import {UpdatePatientSharedServiceService} from "../sharedServices/update-patient-shared-service.service";
import {Patients} from "../patientInterface/patientsInterface";
import {ActivatedRoute,Router} from "@angular/router"
import {DeleteServices} from "../../deleteServices/DeleteServices";

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  patient:Patients;

  constructor(
    private updatePatientSharedServiceService:UpdatePatientSharedServiceService,
    private route:ActivatedRoute,
    private router:Router,
    private deleteServices:DeleteServices
  ) { }

  showPatient(){
    this.updatePatientSharedServiceService.getPatient().subscribe((response:Patients) => {
      this.patient = response
      console.log(this.patient);
    })
  };

  edit(patient){
    this.updatePatientSharedServiceService.selectedPatient = patient;
    this.router.navigate(['/update'])
  };

  deletePatient(patient){
    this.deleteServices.deletePatient(patient).subscribe((response)=> {
      this.router.navigate(['/patientList'])
    })
  }
  ngOnInit() {
    this.showPatient();
  }

}
