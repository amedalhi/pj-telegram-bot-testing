const chatStates = {};

const QUESTIONS = [
  "Please enter Product Name: ",
  "Lot Code: ",
  "Bin Location: ",
  "Do you need to add or subtract product?: ",
  "Quantity: ",
];

const updateChatState = function (chatId, nextQuestionIndex) {
  chatStates[chatId] = nextQuestionIndex;
};

const getChatState = function (chatId) {
  return chatStates[chatId];
};

const clearChatState = function (chatId) {
  delete chatStates[chatId];
};

export { chatStates, QUESTIONS, updateChatState, getChatState, clearChatState };
