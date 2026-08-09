


import { PaymentFactory, paymentMethod } from "../factory/paymentFactory";

 export class PaymentManager {

    private amount: number;
    private paymentMethod: paymentMethod;

    constructor (amount: number, paymentMethod: paymentMethod) {
        this.amount = amount;
        this.paymentMethod = paymentMethod;
    }

    setPaymentAmount (amount: number){
        this.amount = amount;
    }

    setPaymentMethod (paymentMethod: paymentMethod){
        this.paymentMethod = paymentMethod;
    }

    processPayment() {

        if(!this.paymentMethod || !this.amount){
            throw new Error("Please add valid amount and payment Method")
        }

        const paymentStrategy = PaymentFactory.getPaymentStrategy(this.paymentMethod);

        paymentStrategy.pay(this.amount);

    }
}