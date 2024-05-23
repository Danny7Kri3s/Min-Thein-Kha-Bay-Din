export const reducer = (state, action) => {
  switch(action.type) {
    case 'questionsList':
      return {...state, questionsList: action.payload};

    case 'numberList':
      return {...state, numberList: action.payload};

    case 'answerList':
      return {...state, answerList: action.payload};

    case 'addQuestionNo':
      return {...state, question: action.payload};

    case 'addSelectedNum':
      return {...state, selectedNum: action.payload}
    default:
      return state;
  }
};