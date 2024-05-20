import Ticket from "./Ticket";
import DbTicket from "./DbTicket";

export default interface TicketDAO {
  create(ticket: Ticket): Promise<DbTicket>;
}
