import mongoose from "mongoose";
import { generateCode } from "../../../utils/functions";

export const ticketsCollection = "tickets";

const ticketsSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  purchaseDatetime: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  purchaser: {
    type: String,
    required: true,
  },
});

/** Middleware */
ticketsSchema.pre("insertMany", (next, docs) => {
  for (let doc of docs) {
    if (!doc.code) {
      doc.code = generateCode("TICKET");
    }
  }
  next();
});

const ticketsModel = mongoose.model(ticketsCollection, ticketsSchema);

export default ticketsModel;
