import * as actionTypes from "./actionType"

export const spinnerHandler = (data) => {

  return {
    type: actionTypes.SPINNER,
    value: data
  }
}
