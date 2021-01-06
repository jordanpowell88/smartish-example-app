import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from './product';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: Product,
  },
})
@Controller('product')
export class ProductController implements CrudController<Product> {
  constructor(public readonly service: ProductService) {}
}
