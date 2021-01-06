import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BillingService } from './billing.service';

describe('BillingService', () => {
  let service: BillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BillingService],
    });
    service = TestBed.inject(BillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
