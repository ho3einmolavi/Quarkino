import { Schema, Model } from 'mongoose';

export const TransactionSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    successful: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export class TranactionModel extends Model {}

TransactionSchema.loadClass(TranactionModel);
