import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InventoryModel } from './schemas/inventory.schema';
import { InventoryDto } from './dtos/inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel('Inventory')
    private readonly inventoryModel: InventoryModel,
  ) {}

  async createInventory(data: InventoryDto) {
    return this.inventoryModel.findOneAndUpdate(
      {
        productId: data.productId,
      },
      {
        productId: data.productId,
        quantity: data.quantity,
      },
      { upsert: true },
    );
  }
}
