import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';

@Injectable()
export class CategoryService {
  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Category[]> {
    return of([]);
  }

  load(id: string): Observable<Category> {
    return of({} as Category);
  }

  create(category: Category): Observable<Category> {
    return of(category);
  }

  update(category: Category): Observable<Category> {
    return of(category);
  }

  delete(id: string): Observable<Category> {
    return of({} as Category);
  }
}
