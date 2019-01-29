import { PatientProfileModule } from './patient-profile.module';

describe('PatientProfileModule', () => {
  let patientProfileModule: PatientProfileModule;

  beforeEach(() => {
    patientProfileModule = new PatientProfileModule();
  });

  it('should create an instance', () => {
    expect(patientProfileModule).toBeTruthy();
  });
});
