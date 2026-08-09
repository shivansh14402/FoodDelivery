


import { cartItem } from "./cartManager";
import { Order, orderStatus } from "./orderManager";
import { NotificationManager } from '../../notification/index';

export class DeliveyAgent {

    id: number;
    private order: Order;

    constructor(id: number, order: Order){
        this.id = id;
        this.order = order
    }

    getCurrentLocation(id: number, order: Order){
        this.order = order;
        this.id = id;
    }

    updateOrderStatus(status: orderStatus){
        this.order.updateStatus(status);

    }
    
}

export class DeliveryManager {
    

    static async assignDeliveryManager(order: Order): Promise<DeliveyAgent> {
            //some logic to assign delivery manager in the required restaurents it will return id to pass in agaenf for now we send 1 in all 
            let deliveryAgent = new DeliveyAgent(1, order);

            let notificationManager = new NotificationManager();

            //notification to delivery managers
            notificationManager.send({ userId: "1", message: "You are ssigned to pick the order", channel: "pushNotification" })

            return deliveryAgent
    }
}