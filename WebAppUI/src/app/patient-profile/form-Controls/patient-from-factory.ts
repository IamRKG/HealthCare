import {PatientFormModel} from "../patient-form-model/patient-form-model"

export class PatientFromFactory {

  constructor(){}

  getPatientFormModel(formType){
    if(formType === 'updateForm'){
      const updatePatientForm = new PatientFormModel();
      return updatePatientForm;
    }else if(formType === 'add'){
      const addPatientForm = new PatientFormModel();
      return addPatientForm;
    }
  };
}
