import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {PatientProfileModule} from "./patient-profile/patient-profile.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {environment} from '../environments/environment'
import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {PatientListComponent} from "./patient-profile/patient-list/patient-list.component";
import {AddPatientComponent} from "./patient-profile/add-patient/add-patient.component";
import {PatientAddService} from "./patient-profile/patientServices/patient-add.service"
import {ViewPatientComponent} from "./patient-profile/view-patient/view-patient.component";
import {UpdatePatientComponent} from "./patient-profile/update-patient/update-patient.component"
import { LoginComponent } from './login/login.component';
import {UserInformationService} from "./userServices/user-information.service";
import {BASE_URL} from "../config/config"


const appRoutes: Routes = [
  {
    path: 'update',
    component: UpdatePatientComponent
  },

  {
    path: 'add',
    component: AddPatientComponent
  },
  {
    path: 'view',
    component: ViewPatientComponent
  },
  {
    path: 'patientList',
    component: PatientListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '',
    redirectTo: 'patientList',
    pathMatch: 'full'
  }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PatientProfileModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PatientAddService,UserInformationService,{provide: BASE_URL, useValue: environment.baseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
