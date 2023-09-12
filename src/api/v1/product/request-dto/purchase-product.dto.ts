import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import Joi from '../../../../helpers/joi/joi';

export class PurchaseProductParamDto {
  @ApiProperty({
    type: String,
    required: true,
  })
  readonly productId: Types.ObjectId = Joi.objectId();
}

export const PurchaseProductParamValidation = Joi.object(
  new PurchaseProductParamDto(),
);
