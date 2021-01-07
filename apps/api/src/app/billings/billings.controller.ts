import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { BillingInvoice } from './billing-invoice';
import { BillingsService } from './billings.service';

@Crud({
  model: {
    type: BillingInvoice,
  },
})
@Controller('billings')
export class BillingsController implements CrudController<BillingInvoice> {
  constructor(public readonly service: BillingsService) {}
}
