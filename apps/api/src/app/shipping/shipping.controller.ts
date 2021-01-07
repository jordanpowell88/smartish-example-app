import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ShippingInvoice } from './shipping-invoice';
import { ShippingService } from './shipping.service';

@Crud({
  model: {
    type: ShippingInvoice,
  },
})
@Controller('shipping')
export class ShippingController implements CrudController<ShippingInvoice> {
  constructor(public readonly service: ShippingService) {}
}
