import { carts } from "../dao/factory";
import CartService from "./cart.service";

export const cartService = new CartService(carts);
