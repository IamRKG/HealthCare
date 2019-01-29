import { TestBed } from '@angular/core/testing';

import { UpdatePatientSharedServiceService } from './update-patient-shared-service.service';

describe('UpdatePatientSharedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatePatientSharedServiceService = TestBed.get(UpdatePatientSharedServiceService);
    expect(service).toBeTruthy();
  });
});
