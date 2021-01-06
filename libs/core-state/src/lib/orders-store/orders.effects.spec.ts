import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrdersEffects } from './orders.effects';
import { OrdersService } from './orders.service';

describe('OrdersEffects', () => {
  let actions$: Observable<Action>;
  let service: OrdersService;
  let effects: OrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        OrdersEffects,
        OrdersService,
        provideMockActions(() => actions$),
      ],
    }).compileComponents();

    effects = TestBed.inject(OrdersEffects);
    service = TestBed.inject(OrdersService);
  });
  it('should create an instance', () => {
    expect(effects).toBeTruthy();
  });
});
