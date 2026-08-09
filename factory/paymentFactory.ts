

import { CreditCardPaymnetStrategy, paymentInterface, PaypalPaymnetStrategy, UpiPaymnetStrategy } from "../strategies/paymentStrategy";

export type paymentMethod = 'upi' | 'paypal' | 'creditCard';

export class PaymentFactory {

    private static strategies = new Map([
        ['upi', new UpiPaymnetStrategy()],
        ['paypal', new PaypalPaymnetStrategy()],
        ['creditCard', new CreditCardPaymnetStrategy()]
    ])

    static getPaymentStrategy(paymentMtd: paymentMethod): paymentInterface {

        const handler = this.strategies.get(paymentMtd);

        if(handler) return handler;

        throw new Error("Invalid Payment Method");

    }
}