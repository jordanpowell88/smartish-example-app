import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CategoryService } from './category.service';

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly categoryService: CategoryService
  ) {}
}
