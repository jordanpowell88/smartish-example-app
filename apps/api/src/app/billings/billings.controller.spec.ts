import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockRepository } from '../mock-repository.spec';
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
          useClass: MockRepository,
        },
      ],
    }).compile();

    controller = module.get<BillingsController>(BillingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
