import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingInvoice } from './billing-invoice';
import { BillingsController } from './billings.controller';
import { BillingsService } from './billings.service';

describe('BillingsController', () => {
  let controller: BillingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingsController],
      providers: [
        BillingsService,
        {
          provide: getRepositoryToken(BillingInvoice),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<BillingsController>(BillingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
