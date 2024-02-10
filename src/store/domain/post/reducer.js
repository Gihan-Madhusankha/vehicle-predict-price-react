import * as actionTypes from "./actionType";

const initialState = {
  addPostSuccess: null,
  status: -1,
  message: null,
  prediction: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        addPostSuccess: true,
        status: -1
      };
    case actionTypes.ADD_POST_UNSUCCESSFUL:
      return {
        ...state,
        addPostSuccess: false,
        status: -1
      };
    case actionTypes.ADD_POST_FAILED:
      return {
        ...state,
        status: -1,
        addPostSuccess: false
      };
    case actionTypes.PREDICT_PRICE_SUCCESS:
      return {
        ...state,
        prediction: action.value.prediction,
        status: -1
      };
    case actionTypes.PREDICT_PRICE_UNSUCCESSFUL:
      return {
        ...state,
        status: -1
      };
    case actionTypes.PREDICT_PRICE_FAILED:
      return {
        ...state,
        status: -1
      };
    default:
      return state;
  }
};

export default reducer;
