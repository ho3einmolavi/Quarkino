import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TranactionModel } from './schemas/transaction.schema';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel('Transaction')
    private readonly tranactionModel: TranactionModel,
  ) {}
}
