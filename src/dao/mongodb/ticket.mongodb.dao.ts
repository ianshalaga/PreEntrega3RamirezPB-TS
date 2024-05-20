/** Model */
import ticketsModel from "./models/ticket.mongodb.model";
/** Interfaces */
import TicketDAO from "../../interfaces/TicketDAO";
import Ticket from "../../interfaces/Ticket";
import DbTicket from "../../interfaces/DbTicket";

class TicketMongodbDAO implements TicketDAO {
  constructor() {}

  // @@@@
  async create(ticket: Ticket): Promise<DbTicket> {
    try {
      const dbTicket: DbTicket = (await ticketsModel.create(ticket)).toObject();
      return dbTicket;
    } catch (error) {
      throw error;
    }
  }
}

export default TicketMongodbDAO;
