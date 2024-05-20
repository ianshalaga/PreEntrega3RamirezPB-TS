/** Model */
import { usersModel } from "./models/user.mongodb.model";
/** Interfaces */
import UserDAO from "../../interfaces/UserDAO";
import User from "../../interfaces/User";
import dbUser from "../../interfaces/dbUser";
import DbCart from "../../interfaces/DbCart";

class UserMongodbDAO implements UserDAO {
  constructor() {}

  // @@@@
  async getByEmail(email: string): Promise<dbUser> {
    try {
      const dbUser: dbUser = await usersModel.findOne({ email: email });
      return dbUser;
    } catch (error) {
      throw error;
    }
  }

  // @@@@
  async getById(id: string): Promise<dbUser> {
    try {
      const dbUser: dbUser = await usersModel.findById(id);
      return dbUser;
    } catch (error) {
      throw error;
    }
  }

  // @@@@
  async create(newUser: User): Promise<dbUser> {
    try {
      const result: dbUser = (await usersModel.create(newUser)).toObject();
      return result;
    } catch (error) {
      throw error;
    }
  }

  // @@@@
  async getByCart(cartId: string): Promise<dbUser> {
    try {
      const dbUser: dbUser = await usersModel.findOne({ cart: cartId });
      return dbUser;
    } catch (error) {
      throw error;
    }
  }
}

export default UserMongodbDAO;
