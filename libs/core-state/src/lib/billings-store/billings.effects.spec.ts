import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BillingService } from './billing.service';
import { BillingsEffects } from './billings.effects';

describe('BillingsEffects', () => {
  let actions$: Observable<Action>;
  let service: BillingService;
  let effects: BillingsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        BillingsEffects,
        BillingService,
        provideMockActions(() => actions$),
      ],
    }).compileComponents();

    effects = TestBed.inject(BillingsEffects);
    service = TestBed.inject(BillingService);
  });
  it('should create an instance', () => {
    expect(effects).toBeTruthy();
  });
});
