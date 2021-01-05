import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomersEffects } from './customers.effects';
import { CustomersService } from './customers.service';

describe('CustomersEffects', () => {
  let actions$: Observable<Action>;
  let service: CustomersService;
  let effects: CustomersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CustomersEffects,
        CustomersService,
        provideMockActions(() => actions$),
      ],
    }).compileComponents();

    effects = TestBed.inject(CustomersEffects);
    service = TestBed.inject(CustomersService);
  });
  it('should create an instance', () => {
    expect(effects).toBeTruthy();
  });
});
