import query from "../types/query";
import GetProduct from "./GetProduct";
import Product from "./Product";
import DbProduct from "./DbProduct";
import UpdateProduct from "./UpdateProduct";

export default interface ProductDAO {
  getAll(
    limit: number,
    page: number,
    sort: string,
    query: query
  ): Promise<GetProduct>;
  create(productObj: Product): Promise<void>;
  getById(id: string): Promise<DbProduct>;
  update(id: string, updateObj: UpdateProduct): Promise<void>;
  delete(id: string): Promise<void>;
}
