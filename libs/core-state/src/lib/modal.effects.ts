import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ModalEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dialog: MatDialog
  ) {}
}
