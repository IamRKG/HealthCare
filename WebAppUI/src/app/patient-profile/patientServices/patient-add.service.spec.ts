import { TestBed } from '@angular/core/testing';

import { PatientAddService } from './patient-add.service';

describe('PatientAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientAddService = TestBed.get(PatientAddService);
    expect(service).toBeTruthy();
  });
});
