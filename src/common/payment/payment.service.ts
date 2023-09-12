import { MelatGateway } from './gateway-providers/melat.gateway';
import { Injectable } from '@nestjs/common';
import { SamanGateway } from './gateway-providers/saman.gateway';

@Injectable()
export class PaymentService {
  constructor(
    private readonly melatGateway: MelatGateway,
    private readonly samanGateway: SamanGateway,
  ) {}
}
