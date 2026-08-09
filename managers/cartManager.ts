
import { MenuItem, Restaurent } from "./restaurentManager";

export interface cartItem extends MenuItem {
    quantity: number
}

export class CartManager {

    items: Map<string, cartItem[]>;

    constructor(){
        this.items = new Map();
    }

    addItem(item: MenuItem, restaurentId: string) {

        const currRestaurentOrder = this.items.get(restaurentId);

        if(currRestaurentOrder){
            this.items.set(restaurentId, [
                ...currRestaurentOrder,
                { ...item, quantity: 1 }
            ])
        }
        else {
            this.items.set(restaurentId, [
                { ...item, quantity: 1 }
            ])
        }
    }

    removeItem(id: string, restaurentId: string){
        const currRestaurentOrder = this.items.get(restaurentId);

        if(currRestaurentOrder){
            this.items.set(restaurentId, currRestaurentOrder.filter(ord => ord.id !== id))
        }

    }

    updateQuantity(quantity: number, id: string, restaurentId: string){
        const currRestaurentOrder = this.items.get(restaurentId);

        if(currRestaurentOrder){
            this.items.set(restaurentId, currRestaurentOrder.map(ord => {

                if(ord.id === id){
                    ord.quantity = quantity;
                }
                return ord
            }))
        }
    }

    calculateTotalAmount(): number {
        if(this.items.size === 0) return 0;

        let finalAmount = 0;

        for (let [, items] of this.items) {
            const amount = items.reduce((total, ord) => {
                return total + ord.price * ord.quantity;
            }, 0);

            finalAmount += amount;
        }

        return finalAmount;
    }
}