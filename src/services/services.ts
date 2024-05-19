import { carts, products } from "../dao/factory";
import CartService from "./cart.service";
import ProductService from "./product.service";

export const cartService = new CartService(carts);
export const productService = new ProductService(products);
