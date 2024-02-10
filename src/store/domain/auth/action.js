import * as actionTypes from "./actionType";
import * as AuthService from '../../../services/auth';
import Cookies from "js-cookie";
import {spinnerHandler} from '../spinner/action';
import * as constant from "@src/configs/constant";
import * as commonFunc from "@src/utility/commonFunc";


export const setAuth = (data) => {
    return {
        type: actionTypes.SET_AUTH,
        value: data
    }
}

export const resetWarningHandler = (data) => {
    return {
        type: actionTypes.RESET_WARNING,
        value: data
    }
}


export const loginUserSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_USER_SUCCESS,
        value: data
    }
}
export const loginUserFailed = (data) => {
    return {
        type: actionTypes.LOGIN_USER_FAILED,
        value: data
    }
}
export const loginUserUnsuccessful = (data) => {
    return {
        type: actionTypes.LOGIN_USER_UNSUCCESSFUL,
        value: data
    }
}


export const signUpUserSuccess = (data) => {
    return {
        type: actionTypes.SIGNUP_USER_SUCCESS,
        value: data
    }
}

export const signUpUserFailed = (data) => {
    return {
        type: actionTypes.SIGNUP_USER_FAILED,
        value: data
    }
}

export const signUpUserUnsuccessful = (data) => {
    return {
        type: actionTypes.SIGNUP_USER_UNSUCCESSFUL,
        value: data
    }
}

export const logoutUserSuccess = (data) => {
    return {
        type: actionTypes.LOGOUT_USER_SUCCESS,
        value: data
    }
}

export function logoutUser() {
    return dispatch => {
        logoutUserSuccess(null)
    }
}

export function loginUser(userCredentials) {

    return dispatch => {
        dispatch(spinnerHandler(true))
        AuthService.loginUser(userCredentials)
            .then(async (response) => {
                console.log('response');
                if (response.status === 200) {
                    console.log('res > ', response)
                    // await Cookies.set(constant.ACCESS_TOKEN, response.result.token)
                    // await Cookies.set(constant.FIRST_NAME, response.result.firstName)
                    // await Cookies.set(constant.LAST_NAME, response.result.lastName)
                    await Cookies.set(constant.USER_NAME, response.data.username)
                    dispatch(loginUserSuccess(response))
                    dispatch(spinnerHandler(false))
                } else {
                    dispatch(spinnerHandler(false))
                    dispatch(loginUserUnsuccessful(response))
                }
            })
            .catch((e) => {
                dispatch(spinnerHandler(false))
                dispatch(loginUserFailed({
                    status: 2,
                    message: "Communication Failure"
                }))
            })
    }
}

export function signUpUser(userCredentials) {

    return dispatch => {
        dispatch(spinnerHandler(true))
        AuthService.signUpUser(userCredentials)
            .then(async (response) => {
                if (response.status === 200) {
                    dispatch(signUpUserSuccess(response))
                    dispatch(spinnerHandler(false))
                } else {
                    commonFunc.notifyMessage(response.result);
                    dispatch(spinnerHandler(false));
                    dispatch(signUpUserUnsuccessful(response));
                }
            })
            .catch((e) => {
                dispatch(spinnerHandler(false))
                dispatch(signUpUserFailed({
                    status: 2,
                    message: "Communication Failure"
                }))
            })
    }
}
