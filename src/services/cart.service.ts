import dao from "../types/dao";
import ProductCart from "../interfaces/ProductCart";

export default class CartService {
  dao: dao;

  constructor(dao: dao) {
    this.dao = dao;
  }

  async getAllCarts() {
    return await this.dao.getAll();
  }

  async createCart() {
    return await this.dao.create();
  }

  async getCartById(id: string) {
    return await this.dao.getById(id);
  }

  async addProductCart(cid: string, pid: string) {
    return await this.dao.addProduct(cid, pid);
  }

  async removeProductCart(cid: string, pid: string) {
    return await this.dao.removeProduct(cid, pid);
  }

  async updateCart(cid: string, updateProducts: ProductCart[]) {
    return await this.dao.update(cid, updateProducts);
  }

  async updateProductQuantityCart(cid: string, pid: string, quantity: number) {
    return await this.dao.updateProductQuantity(cid, pid, quantity);
  }

  async clearCart(cid: string) {
    return await this.dao.clear(cid);
  }
}
