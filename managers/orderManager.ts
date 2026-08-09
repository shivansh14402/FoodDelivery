

import { NotificationManager } from "../../notification";
import { cartItem } from "./cartManager";
import { DeliveryManager, DeliveyAgent } from "./deliveryManager";
import { Restaurent } from "./restaurentManager";

export type orderStatus = "prepareing" | 'prepared' | 'pickuped' | 'delivered';

export class Order {
    id: number;
    status: orderStatus;
    items: cartItem[];
    restaurentId: string;
    deliveryAgent: DeliveyAgent | null;
    notificationManager: NotificationManager

    constructor(id: number, orderItems: cartItem[], restaurentId: string) {
        this.id = id;
        this.status = 'prepareing'
        this.items = orderItems
        this.restaurentId = restaurentId
        this.deliveryAgent = null;
        this.notificationManager = new NotificationManager()
    }

    updateStatus(status: orderStatus) {
        this.status = status;

        // on status update notification send to restaurent, delivary agent and customer
        this.notificationManager.send({ userId: this.restaurentId, message: `order status updated to ${status}`, channel: "pushNotification" })

        if (this.deliveryAgent) {
            this.notificationManager.send({ userId: this.deliveryAgent.id + "", message: `order status updated to ${status}`, channel: "pushNotification" })
        }
    }

    assignDeliveyAgent(deliveryAgent: DeliveyAgent) {
        this.deliveryAgent = deliveryAgent;
    }
}

export class OrderManager {


    static async placeOrder(items: Map<string, cartItem[]>) {
        let id = 1
        for (let [restaurentId, orderItems] of items) {

            let order = new Order(id++, orderItems, restaurentId)

            let deliveryAgent: DeliveyAgent = await DeliveryManager.assignDeliveryManager(order);

            order.assignDeliveyAgent(deliveryAgent)
        }
    }
}