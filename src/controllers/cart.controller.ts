import { Request, Response } from "express";
import {
  cartService,
  productService,
  ticketService,
} from "../services/services";
import { successStatus, failureStatus } from "../utils/statuses";
// Interfaces
import DbCart from "../interfaces/DbCart";
import ProductCart from "../interfaces/ProductCart";
// Validators
import validateNumber from "../validators/number";
import validateProductCart from "../validators/productCart";
import DbProduct from "../interfaces/DbProduct";
import Ticket from "../interfaces/Ticket";

class CartController {
  constructor() {}

  // @@@@
  async getAllCarts(req: Request, res: Response) {
    try {
      const cart: DbCart[] = await cartService.getAllCarts();
      res.status(200).json(cart);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async getCartById(req: Request, res: Response) {
    try {
      const cid: string = req.params.cid;
      const cart: DbCart = await cartService.getCartById(cid);
      res.status(200).json(cart);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async createCart(req: Request, res: Response) {
    try {
      await cartService.createCart();
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async addProductCart(req: Request, res: Response) {
    try {
      const cid: string = req.params.cid;
      const pid: string = req.params.pid;
      await cartService.addProductCart(cid, pid);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async updateCart(req: Request, res: Response) {
    try {
      const cid: string = req.params.cid;
      const updateProducts: ProductCart[] = validateProductCart(req.body);
      await cartService.updateCart(cid, updateProducts);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async updateProductQuantityCart(req: Request, res: Response) {
    try {
      const cid: string = req.params.cid;
      const pid: string = req.params.pid;
      const quantity: number = validateNumber(req.body);
      await cartService.updateProductQuantityCart(cid, pid, quantity);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async removeProductCart(req: Request, res: Response) {
    try {
      const cid: string = req.params.cid;
      const pid: string = req.params.pid;
      await cartService.removeProductCart(cid, pid);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async clearCart(req: Request, res: Response) {
    try {
      const cid: string = req.params.cid;
      await cartService.clearCart(cid);
      res.status(200).json(successStatus);
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }

  // @@@@
  async purchase(req: Request, res: Response) {
    try {
      const user = req.session.user;
      let amount: number = 0; // Total price
      const noPurchased: ProductCart[] = [];
      const stockless: string[] = [];
      const cid: string = req.params.cid;
      const cart: DbCart = await cartService.getCartById(cid);
      cart.products.forEach(async (product: ProductCart) => {
        const dbProduct: DbProduct = await productService.getProductById(
          product.product
        );
        let diff = dbProduct.stock - product.quantity;
        if (diff >= 0) {
          await productService.updateProduct(product.product, { stock: diff });
          amount += product.quantity * dbProduct.price;
        } else {
          stockless.push(product.product);
          noPurchased.push(product);
        }
      });
      const ticket: Ticket = {
        amount: amount,
        purchaser: user.email,
      };
      await ticketService.createTicket(ticket);
      await cartService.updateCart(cid, noPurchased);
      if (stockless.length > 0) {
        res.json(stockless);
      } else {
        res.status(200).json(successStatus);
      }
    } catch (error) {
      res.json(failureStatus(error.message));
    }
  }
}

export default new CartController();
