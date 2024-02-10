import * as actionTypes from "./actionType";
import * as PostService from '../../../services/post';
import Cookies from "js-cookie";
import {spinnerHandler} from '../spinner/action';
import * as constant from "@src/configs/constant";
import * as commonFunc from "@src/utility/commonFunc";


export const postAddSuccess = (data) => {
    return {
        type: actionTypes.ADD_POST_SUCCESS,
        value: data
    }
}
export const postAddFailed = (data) => {
    return {
        type: actionTypes.ADD_POST_FAILED,
        value: data
    }
}
export const postAddUnsuccessful = (data) => {
    return {
        type: actionTypes.ADD_POST_UNSUCCESSFUL,
        value: data
    }
}

export const predictSuccess = (data) => {
    return {
        type: actionTypes.PREDICT_PRICE_SUCCESS,
        value: data
    }
}
export const predictFailed = (data) => {
    return {
        type: actionTypes.PREDICT_PRICE_FAILED,
        value: data
    }
}
export const predictUnsuccessful = (data) => {
    return {
        type: actionTypes.PREDICT_PRICE_UNSUCCESSFUL,
        value: data
    }
}


export function postAd(postData) {

    return dispatch => {
        dispatch(spinnerHandler(true))
        PostService.postAdd(postData)
            .then(async (response) => {
                console.log('response >> ', response);
                if (response.status === 200) {
                    console.log('res > ', response)
                    dispatch(postAddSuccess(response))
                    dispatch(spinnerHandler(false))
                } else {
                    dispatch(spinnerHandler(false))
                    dispatch(postAddUnsuccessful(response))
                }
            })
            .catch((e) => {
                dispatch(spinnerHandler(false))
                dispatch(postAddFailed({
                    status: 2,
                    message: "Communication Failure"
                }))
            })
    }
}

export function predictPrice(predictData) {

    return dispatch => {
        dispatch(spinnerHandler(true))
        PostService.predictPrice(predictData)
            .then(async (response) => {
                console.log('response', response);
                if (response.status === 200) {
                    console.log('res > ', response.data)
                    dispatch(predictSuccess(response.data))
                    dispatch(spinnerHandler(false))
                } else {
                    dispatch(spinnerHandler(false))
                    dispatch(predictUnsuccessful(response))
                }
            })
            .catch((e) => {
                dispatch(spinnerHandler(false))
                dispatch(predictFailed({
                    status: 2,
                    message: "Communication Failure"
                }))
            })
    }
}
