const chatStates = {};

const QUESTIONS = [
  "Please enter Product Name: ",
  "Lot Code: ",
  "Bin Location: ",
  "Do you need to add or subtract product?: ",
  "Quantity: ",
];

const questionTemplate = `
  Please enter the following,
  Product Name: ______________
  Lot Code: ______________
  Bin Location: ______________
  Do you need to add or subtract product?: ______________
  Quantity: ______________
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
