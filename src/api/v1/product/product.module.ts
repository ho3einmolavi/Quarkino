import { Module } from '@nestjs/common';
import { V1ProductController } from './product.controller';
import { UserModule } from '../../../common/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [V1ProductController],
})
export class V1ProductModule {}
