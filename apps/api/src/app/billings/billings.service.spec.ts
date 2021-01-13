import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingInvoice } from './billing-invoice';
import { BillingsService } from './billings.service';

describe('BillingsService', () => {
  let service: BillingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BillingsService,
        {
          provide: getRepositoryToken(BillingInvoice),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BillingsService>(BillingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
