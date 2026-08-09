



export interface paymentInterface {
    pay (amount: number): boolean
}


export class UpiPaymnetStrategy implements paymentInterface {

    pay(amount: number): boolean {

        console.log(`Paying amount ${amount} using UPI`)
        
        return true;
    }
}

export class PaypalPaymnetStrategy implements paymentInterface {

    pay(amount: number): boolean {

        console.log(`Paying amount ${amount} using paypal`)
        
        return true;
    }
}

export class CreditCardPaymnetStrategy implements paymentInterface {

    pay(amount: number): boolean {

        console.log(`Paying amount ${amount} using credit card`)
        
        return true;
    }
}
