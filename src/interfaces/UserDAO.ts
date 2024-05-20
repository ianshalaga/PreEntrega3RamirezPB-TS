import dbUser from "./dbUser";
import User from "./User";

export default interface UserDAO {
  getById(id: string): Promise<dbUser>;
  getByEmail(email: string): Promise<dbUser>;
  create(newUser: User): Promise<dbUser>;
  getByCart(cartId: string): Promise<dbUser>;
}
