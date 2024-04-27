//imports
import { getAxiosInstance } from "../controller/axios.js";
import { errorHandler } from "../controller/helper.js";

//vars
const MY_TOKEN = "6470718254:AAFMtlDromAAr9tZa95PjacRm7awDWDsE5A";
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;
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

  try {
    const chatId = messageObj.chat.id;
    if (messageText.charAt(0) === "/") {
      const command = messageText.substr(1);
      switch (command) {
        case "start":
          //we want to send a welcome message
          return sendMessage(chatId, "Hi! I'm a bot. I can help you.");
        default:
          return sendMessage(
            chatId,
            "Sorry, I don't understand. Type /start to get started."
          );
      }
    } else {
      return sendMessage(chatId, messageText);
    }
  } catch (error) {
    errorHandler(error, "handleMessage");
  }
};

export { sendMessage, handleMessage };
