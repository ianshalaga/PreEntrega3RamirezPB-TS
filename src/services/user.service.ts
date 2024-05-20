import UserMongodbDAO from "../dao/mongodb/user.mongodb.dao";
import User from "../interfaces/User";

export default class UserService {
  dao: UserMongodbDAO;

  constructor(dao: UserMongodbDAO) {
    this.dao = dao;
  }

  async getUserById(id: string) {
    return await this.dao.getById(id);
  }

  async getUserByEmail(email: string) {
    return await this.dao.getByEmail(email);
  }

  async createUser(newUser: User) {
    return await this.dao.create(newUser);
  }

  async getUserByCart(cartId: string) {
    return await this.dao.getByCart(cartId);
  }
}
