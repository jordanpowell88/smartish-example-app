import { Injectable } from '@nestjs/common';
import { Category } from './category';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) readonly repo) {
    super(repo);
  }
}
