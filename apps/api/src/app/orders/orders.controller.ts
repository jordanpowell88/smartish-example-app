import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Order } from './order';
import { OrdersService } from './orders.service';

@Crud({
  model: {
    type: Order,
  },
})
@Controller('orders')
export class OrdersController implements CrudController<Order> {
  constructor(public readonly service: OrdersService) {}
}
