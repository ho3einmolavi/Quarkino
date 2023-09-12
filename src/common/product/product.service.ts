import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from './schemas/product.schema';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: ProductModel,
  ) {}

  async addFakeProducts() {
    const fakeProducts: ProductDto[] = [
      {
        name: 'iphone 15',
        price: 100,
      },
      {
        name: 'macBook Air',
        price: 200,
      },
      {
        name: 'AirPod',
        price: 50,
      },
    ];
    const promises = fakeProducts.map(({ name, price }) => {
      return this.productModel.findOneAndUpdate(
        {
          name,
        },
        {
          name,
          price,
        },
        {
          upsert: true,
        },
      );
    });
    return Promise.all(promises);
  }
}
