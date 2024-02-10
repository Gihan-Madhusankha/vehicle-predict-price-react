import ApiService from './apiService'

export async function loginUser(userCredentials) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = false
    apiObject.endpoint = 'login-user'
    apiObject.body = userCredentials
    apiObject.prePath = 'auth'
    // apiObject.type = "AUTH"
    return await ApiService.callApi(apiObject)
}

export async function signUpUser(userCredentials) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = false
    apiObject.endpoint = 'create-user'
    apiObject.body = userCredentials
    apiObject.prePath = 'auth'
    return await ApiService.callApi(apiObject)
}

export async function verifyEmailOrPhone(userCredentials) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = false
    apiObject.endpoint = 'verifyEmailOrPhone'
    apiObject.body = userCredentials
    apiObject.prePath = 'auth'
    return await ApiService.callApi(apiObject)
}

export async function changePassword(obj) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = true
    apiObject.endpoint = 'auth/changePassword'
    apiObject.body = obj
    return await ApiService.callApi(apiObject)
}

export async function sendOtp(obj) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = false
    apiObject.prePath = 'auth'
    apiObject.endpoint = 'getOtpCode'
    apiObject.body = obj
    return await ApiService.callApi(apiObject)
}

export async function loginSave(obj) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = true
    apiObject.endpoint = 'log/save'
    apiObject.body = obj
    return await ApiService.callApi(apiObject)
}
