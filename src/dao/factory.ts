import config from "../config/env.config";
import MongoDB from "../config/mongoDb.config";
import CartMongodbDAO from "./mongodb/cart.mongodb.dao";

export let carts: CartMongodbDAO;
export let products: string;
export let users: string;
export let messages: string;

switch (config.dao) {
  case "mongodb":
    MongoDB.getInstance();
    const { default: cartsMongodb } = await import(
      "./mongodb/cart.mongodb.dao"
    );
    carts = new cartsMongodb();
    break;
  case "files":
    // No implementation
    break;
  default:
    break;
}
