export interface PaymentGatewayInterface {
  initiatePayment(paymentData: any): Promise<any>;
}
