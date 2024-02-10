import * as actionTypes from "./actionType";

const initialState = {
  user: null,
  loggedInStatus: null,
  signUpStatus: null,

  auth: null,
  status: -1,
  message: null,

  isFailed: true,
  isFailedUser: true,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.value,
        loggedInStatus: true,
        status: -1
      };
    case actionTypes.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        signUpStatus: true,
        status: -1
      };
    case actionTypes.LOGIN_USER_UNSUCCESSFUL:
      return {
        ...state,
        user: null,
        loggedInStatus: false,
        status: action.value.status ? action.value.status : 0,
        message: action.value.result
      };

    case actionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loggedInStatus: false,
        // status: 1,
        message: action.value ? action.value.message : null
      };
    case actionTypes.LOGOUT_USER_UNSUCCESSFUL:
      return {
        ...state,
        loggedInStatus: true,
        status: action.value.status ? action.value.status : 0,
        message: action.value.message
      };

    case actionTypes.LOGIN_USER_FAILED:
      return {
        ...state,
        status: action.value.status ? action.value.status : 0,
        message: action.value.message
      };

    case actionTypes.RESET_WARNING:
      return {
        ...state,
        status: -1,
        message: null,

        isFailed: true,
        loading: true,
        getOtpStatus: false,
        signUpStatus: false
      };
    case actionTypes.SET_AUTH:
      return {
        ...state,
        loggedInStatus: true,
        auth: action.value

      };
    default:
      return state;
  }
};

export default reducer;
