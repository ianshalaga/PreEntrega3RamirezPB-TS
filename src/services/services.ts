import { carts, products, users } from "../dao/factory";
import CartService from "./cart.service";
import ProductService from "./product.service";
import UserService from "./user.service";

export const cartService = new CartService(carts);
export const productService = new ProductService(products);
export const userService = new UserService(users);
