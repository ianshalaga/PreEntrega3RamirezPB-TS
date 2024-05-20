import twilio from "twilio";
import config from "./env.config";

const clientTwilio = twilio(config.twilioAccountSid, config.twilioAuthToken);

export default clientTwilio;
