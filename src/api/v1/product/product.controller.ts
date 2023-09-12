import {
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StandardResponseFactory } from '../../../helpers/interceptors/formatter/standard-response.factory';
import { JoiValidationPipe } from '../../../helpers/joi/joi-validation.pipe';
import {
  PurchaseProductParamDto,
  PurchaseProductParamValidation,
} from './request-dto/purchase-product.dto';
import { PurchaseProductDto } from './response-dto/purchase-product.dto';
import { BaseAuthGuard } from '../../../app/guards/auth.guard';
import { UserDto } from '../../../common/user/dtos/user.dto';
import { User } from '../../../app/decorators/user.decorator';

@ApiBearerAuth()
@UseGuards(BaseAuthGuard)
@ApiTags('Product')
@Controller('api/v1/product')
export class V1ProductController {
  @ApiOkResponse({
    type: StandardResponseFactory(PurchaseProductDto),
  })
  @UsePipes(
    new JoiValidationPipe({
      params: PurchaseProductParamValidation,
    }),
  )
  @HttpCode(HttpStatus.OK)
  @Post(':productId/purchase')
  async purchaseProduct(
    @Param() { productId }: PurchaseProductParamDto,
    @User() user: UserDto,
  ): Promise<PurchaseProductDto> {
    return { success: true };
  }
}
