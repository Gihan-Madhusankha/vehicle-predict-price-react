import ApiService from './apiService'

export async function postAdd(postData) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = false
    apiObject.endpoint = 'post-ad'
    apiObject.body = postData
    apiObject.prePath = 'post'
    return await ApiService.callApi(apiObject)
}

export async function predictPrice(postData) {
    const apiObject = {}
    apiObject.method = 'POST'
    apiObject.authentication = false
    apiObject.endpoint = 'predict-price'
    apiObject.body = postData
    apiObject.prePath = 'post'
    return await ApiService.callApi(apiObject)
}
