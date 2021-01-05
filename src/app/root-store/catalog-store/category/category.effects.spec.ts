import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryEffects } from './category.effects';
import { CategoryService } from './category.service';

describe('CategoryEffects', () => {
  let actions$: Observable<Action>;
  let service: CategoryService;
  let effects: CategoryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CategoryEffects,
        CategoryService,
        provideMockActions(() => actions$),
      ],
    }).compileComponents();

    effects = TestBed.inject(CategoryEffects);
    service = TestBed.inject(CategoryService);
  });
  it('should create an instance', () => {
    expect(effects).toBeTruthy();
  });
});
