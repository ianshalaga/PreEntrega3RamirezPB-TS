/** Factory */
import { carts, products, users, tickets } from "../dao/factory";
/** Services */
import CartService from "./cart.service";
import ProductService from "./product.service";
import UserService from "./user.service";
import TicketService from "./ticket.service";

export const cartService = new CartService(carts);
export const productService = new ProductService(products);
export const userService = new UserService(users);
export const ticketService = new TicketService(tickets);
