import Ticket from "./Ticket";

interface DbTicket extends Ticket {
  _id: string;
  code: string;
  purchaseDatetime: Date;
}

export default DbTicket;
