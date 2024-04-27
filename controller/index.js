import { handleMessage, sendMessage } from "./telegram.js";
import { errorHandler } from "./helper.js";

const handler = async (req, method) => {
  try {
    if (method === "GET") {
      return "Hello Get";
    }

    const { body } = req;
    if (body && body.message) {
      const messageObj = body.message;
      await handleMessage(messageObj);
      return "Success";
    }

    return "Unknown request";
  } catch (error) {
    errorHandler(error, "mainIndexHandler");
  }
};

export { handler };
