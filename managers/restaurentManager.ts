


import { NotificationManager } from "../../notification";
import { paymentMethod } from "../factory/paymentFactory";
import { CartManager } from "./cartManager";
import { OrderManager } from "./orderManager";
import { PaymentManager } from "./PaymentManager";

export interface MenuItem {
    id: string;
    price: number;
    name: string
}

export interface Restaurent {
    id: string;
    menu: MenuItem[];
    name: string
}

export class PrintInvoiceManager {

    static printInvoice(items: MenuItem[]){
        
    }
}

export class RestaurentManager {

    restaurents: Restaurent[];
    location: string;
    cartManager: CartManager;
    notificationManager: NotificationManager

    constructor(location: string){
        this.restaurents = []; //some get restaurent functionality based on loaction
        this.location = location;
        this.cartManager = new CartManager();
        this.notificationManager = new NotificationManager()
    }

    getRestaurent(): Restaurent[] {
        return this.restaurents
    }

    addToCart(item: MenuItem, restaurent: Restaurent) {
        this.cartManager.addItem(item, restaurent.id);
    }

    removeFromCart(item: MenuItem, restaurent: Restaurent) {
        this.cartManager.removeItem(item.id, restaurent.id);
    }

    updateQuantity(quantity: number, id: string, restaurent: Restaurent){
        this.cartManager.updateQuantity(quantity, id, restaurent.id);
    }

    async placeOrder(paymentMethod: paymentMethod){
        const amount = this.cartManager.calculateTotalAmount();
        const paymentManager = new PaymentManager(amount, paymentMethod);

        paymentManager.processPayment();

        await OrderManager.placeOrder(this.cartManager.items);
    }

}