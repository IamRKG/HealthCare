import {Component, OnInit} from '@angular/core';
import {UpdatePatientSharedServiceService} from "../sharedServices/update-patient-shared-service.service";
import {Patients} from "../patientInterface/patientsInterface";
import {ActivatedRoute,Router} from "@angular/router"

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
    private router:Router
  ) { }

  showPatient(){
    this.updatePatientSharedServiceService.getPatient().subscribe((response:Patients) => {
      this.patient = response
    })
  };

  edit(patient){
    this.updatePatientSharedServiceService.selectedPatient = patient;
    this.router.navigate(['/update'])
  };

  ngOnInit() {
    this.showPatient();
  }

}
