import { Injectable } from '@nestjs/common';
import { PaymentGatewayInterface } from '../interfaces/payment-gateway.interface';

@Injectable()
export class SamanGateway implements PaymentGatewayInterface {
  async initiatePayment(paymentData: any): Promise<any> {
    // Implement logic to initiate payment with IPG1
    // Return the result of the payment initiation
  }
}
