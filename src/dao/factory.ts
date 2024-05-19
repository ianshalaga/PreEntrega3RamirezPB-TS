import config from "../config/env.config";
import MongoDB from "../config/mongoDb.config";
import CartMongodbDAO from "./mongodb/cart.mongodb.dao";
import ProductMongodbDAO from "./mongodb/product.mongodb.dao";

export let carts: CartMongodbDAO;
export let products: ProductMongodbDAO;
export let users: string;
export let messages: string;

switch (config.dao) {
  case "mongodb":
    MongoDB.getInstance();
    const { default: cartsMongodb } = await import(
      "./mongodb/cart.mongodb.dao"
    );
    const { default: productsMongodb } = await import(
      "./mongodb/product.mongodb.dao"
    );
    carts = new cartsMongodb();
    products = new productsMongodb();
    break;
  case "files":
    // No implementation
    break;
  default:
    break;
}
