import { TestBed, inject } from '@angular/core/testing';

import { EyeBlinkService } from './eye-blink.service';

describe('EyeBlinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EyeBlinkService]
    });
  });

  it('should be created', inject([EyeBlinkService], (service: EyeBlinkService) => {
    expect(service).toBeTruthy();
  }));
});
