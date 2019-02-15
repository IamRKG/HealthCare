import {ValidatorFn, Validators} from "@angular/forms";

export class PatientValidator {
  require:ValidatorFn ;
  min:ValidatorFn ;
  max:ValidatorFn ;
  notAllowFistLetterZero:ValidatorFn ;
  constructor(){
    this.require = Validators.required,
    this.min = Validators.min(9999),
    this.max = Validators.max(99999999),
    this.notAllowFistLetterZero = Validators.pattern('^[1-9][0-9]*$')
  }
};
