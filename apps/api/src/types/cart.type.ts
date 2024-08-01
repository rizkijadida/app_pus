import { CartItem } from "./cart.item.type";

export interface Cart {
    id: number;
    userDetailId: number;
}

export interface CartResponse {
    empty: boolean;
    items: CartItem[];
}