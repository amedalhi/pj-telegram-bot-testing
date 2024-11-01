//env
import "dotenv/config";

//imports
import { getAxiosInstance } from "../controller/axios.js";
import { errorHandler } from "../controller/helper.js";
import { questionTemplate } from "../controller/questions.js";

//vars
const MY_TOKEN = process.env.API_TOKEN;
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}/`;
const axiosInstance = getAxiosInstance(BASE_URL);

const sendMessage = (chatId, messageText) => {
  return axiosInstance
    .get("sendMessage", {
      chat_id: chatId,
      text: messageText,
    })
    .catch((ex) => {
      errorHandler(ex, "sendMessage", "axios");
    });
};

const handleMessage = async (messageObj) => {
  const messageText = messageObj.text || "";
  if (!messageText) {
    errorHandler("No message text", "handleMessage", "telegram");
    return "";
  }

  const chatId = messageObj.chat.id;

  try {
    if (messageText.charAt(0) === "/") {
      // Extract command using regex to handle possible @username
      const commandMatch = messageText.match(/^\/(\w+)(@\w+)?\b/);
      if (!commandMatch) return sendMessage(chatId, "Invalid command format.");

      const command = commandMatch[1].toLowerCase(); // The command without the bot username

      switch (command) {
        case "start":
          //we want to send a welcome message
          return sendMessage(
            chatId,
            "Hi! I'm a Pressed Bot. I can help you log transfers. Please type /transfer to start."
          );
        case "transfer":
          return sendMessage(chatId, questionTemplate);
        default:
          return sendMessage(
            chatId,
            "Sorry, I don't understand. Type /start to get started."
          );
      }
    }
  } catch (error) {
    errorHandler(error, "handleMessage");
  }
};

export { sendMessage, handleMessage };
