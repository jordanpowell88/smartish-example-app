import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ShippingEffects } from './shipping.effects';
import { ShippingService } from './shipping.service';
import { HttpClientModule } from '@angular/common/http';

describe('ShippingEffects', () => {
  let actions$: Observable<Action>;
  let service: ShippingService;
  let effects: ShippingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ShippingEffects,
        ShippingService,
        provideMockActions(() => actions$),
      ],
    }).compileComponents();

    effects = TestBed.inject(ShippingEffects);
    service = TestBed.inject(ShippingService);
  });
  it('should create an instance', () => {
    expect(effects).toBeTruthy();
  });
});
