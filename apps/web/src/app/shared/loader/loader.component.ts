import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoading } from '@bb-smartish/core-state';

@Component({
  selector: 'bb-smartish-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private readonly store: Store) {}
}
