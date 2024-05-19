import DbCart from "./DbCart";
import ProductCart from "./ProductCart";

export default interface CartDAO {
  getAll(): Promise<DbCart[]>;
  create(): Promise<DbCart>;
  getById(id: string): Promise<DbCart>;
  addProduct(cid: string, pid: string): Promise<void>;
  removeProduct(cid: string, pid: string): Promise<void>;
  update(cid: string, updateProducts: ProductCart[]): Promise<void>;
  updateProductQuantity(
    cid: string,
    pid: string,
    quantity: number
  ): Promise<void>;
  clear(cid: string): Promise<void>;
}
