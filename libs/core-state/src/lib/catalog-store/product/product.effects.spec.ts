import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductEffects } from './product.effects';
import { ProductService } from './product.service';

describe('ProductEffects', () => {
  let actions$: Observable<Action>;
  let service: ProductService;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProductEffects,
        ProductService,
        provideMockActions(() => actions$),
      ],
    }).compileComponents();

    effects = TestBed.inject(ProductEffects);
    service = TestBed.inject(ProductService);
  });
  it('should create an instance', () => {
    expect(effects).toBeTruthy();
  });
});
