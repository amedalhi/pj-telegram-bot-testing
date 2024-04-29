const chatStates = {};

const QUESTIONS = [
  "Please enter Product Name: ",
  "Lot Code: ",
  "Bin Location: ",
  "Do you need to add or subtract product?: ",
  "Quantity: ",
];

const questionTemplate = `
  Enter the following:
  Product Name: _____
  Bottle Size: _____
  Lot Code: _____
  Bin Location: _____
  Add/Subtract: _____
  Quantity: _____
`;

const updateChatState = function (chatId, nextQuestionIndex) {
  chatStates[chatId] = nextQuestionIndex;
};

const getChatState = function (chatId) {
  return chatStates[chatId];
};

const clearChatState = function (chatId) {
  delete chatStates[chatId];
};

export {
  chatStates,
  QUESTIONS,
  updateChatState,
  getChatState,
  clearChatState,
  questionTemplate,
};
