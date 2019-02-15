import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {PatientAddService} from "../patientServices/patient-add.service";
import {PatientFromFactory} from "../form-Controls/patient-from-factory"
import {Patients} from "../patientInterface/patientsInterface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  @Output() addToList = new EventEmitter();
  patient:Patients;
  constructor(
    private  patientAddService:PatientAddService,
    private router:Router
  ) { }

  patientFromFactory = new PatientFromFactory;
  addProfileForm = this.patientFromFactory.getPatientFormModel("add").getPatientFormModel(this.patient);


  addPatient(){
    if(this.addProfileForm.valid) {
      this.patientAddService.addPatient(this.addProfileForm.value).subscribe(successMsg => {
        this.router.navigate(['/patientList']);
        return successMsg;
      });
    }
  }

  ngOnInit() {
  }
}
