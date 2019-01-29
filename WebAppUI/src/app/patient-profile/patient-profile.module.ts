import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import {MatListModule, MatRippleModule, MatDividerModule, MatFormFieldModule, MatInputModule,MatCardModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component'


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports:[
    PatientListComponent
  ],
  declarations: [PatientListComponent, AddPatientComponent, ViewPatientComponent, UpdatePatientComponent]
})
export class PatientProfileModule {}
