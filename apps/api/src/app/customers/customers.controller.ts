import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Customer } from './customer';
import { CustomersService } from './customers.service';

@Crud({
  model: {
    type: Customer,
  },
})
@Controller('customers')
export class CustomersController implements CrudController<Customer> {
  constructor(public readonly service: CustomersService) {}
}
