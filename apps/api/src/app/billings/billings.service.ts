import { InjectRepository } from '@nestjs/typeorm';
import { BillingInvoice } from './billing-invoice';
import { Injectable } from '@angular/core';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class BillingsService {
  constructor(
    @InjectRepository(BillingInvoice) readonly repo: Repository<BillingInvoice>
  ) {}

  loadAll(): Observable<BillingInvoice[]> {
    return from(this.repo.find());
  }

  load(id: number): Observable<BillingInvoice> {
    return from(this.repo.findOne(id));
  }

  create(invoice: BillingInvoice): Observable<BillingInvoice> {
    return from(this.repo.save(invoice));
  }

  update(invoice: BillingInvoice): Observable<BillingInvoice> {
    return from(this.create(invoice));
  }

  delete(id: number): Observable<BillingInvoice> {
    return from(
      this.load(id).pipe(tap((invoice) => this.repo.remove(invoice)))
    );
  }
}
