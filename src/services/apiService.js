/*eslint-disable*/
import axios from './axiosConfig';
import apiConfig from './apiConfig';
import Cookies from "js-cookie";
import {history} from "../history";
import * as constant from "@src/configs/constant";
import * as commonFunc from "@src/utility/commonFunc";
// import {MANAGER_ROLE, SUPERVISOR_ROLE, USER_TYPE} from "../configs/constant"


async function callApi(apiObject) {
	let body = {}

	const method = apiObject.method ? apiObject.method.toLowerCase() : 'get'
	if (method === 'post' || method === 'put' || method === 'patch') {
		body = apiObject.body ? apiObject.body : {}
	}

	const headers = {
		'Content-Type': apiObject.urlencoded ? 'application/x-www-form-urlencoded' : apiObject.multipart ? 'multipart/form-data' : 'application/json'
	}
	if (apiObject.authentication) {
		headers.Authorization = `Bearer ${Cookies.get(constant.ACCESS_TOKEN)}`
	}

	const serverUrl = apiConfig.serverUrl
	let basePath = apiConfig.basePath

	if (apiObject.basePath) {
		basePath = apiObject.basePath
	}

	const prePath = apiObject.prePath

	const url = `${serverUrl}/${basePath}/${prePath}/${apiObject.endpoint}`
	console.log('url >> ', url);
	let result

	await axios[method](url, method !== 'get' && method !== 'delete' ? body : {headers}, {headers})
		.then(async response => {
			// let isSupervisor = localStorage.getItem(USER_TYPE) === MANAGER_ROLE
			// result = {...await response.data, isSupervisor: isSupervisor, desc: response.data.desc ? response.data.desc: response.data.result, status: response && response.status ? response.status : 0}
			result = {
				...response.data,
				desc: response.data.desc ? response.data.desc : response.data.result,
				status: response && response.status ? response.status : 0
			}
		})
		.catch(async error => {
			if (error !== undefined) {
				// console.log("error.response.data",error.response.data)
				if (error.response === undefined) {
					result = await {
						success: false,
						status: 2,
						result: "Your connection was interrupted",
						data: null
					}
				} else if (error.response.status === 401) {
					result = await {
						success: false,
						status: 2,
						result: "Your session expired! Please login again..",
						data: null
					}
					if (apiObject.type !== "AUTH") {
						Cookies.remove(constant.ACCESS_TOKEN)
						commonFunc.notifyMessage("Your session expired! Please login again..", 0)
						history.push(`${constant.BASE_ROUTE_PATH}/signIn`)
					}

				} else if (error.response.status === 403) {
					result = await {
						success: false,
						status: 2,
						result: "Access is denied.",
						data: null
					}
				} else if (error.response.status === 417) {
					result = await {
						success: false,
						status: 2,
						result: "Oops! Something went wrong.",
						data: null
					}
				} else if (error.response.data !== undefined) {
					result = await {
						success: false,
						status: 0,
						result: error.response.data.result ? error.response.data.result : 'Sorry, something went wrong',
						data: null
					}
				} else {
					result = await {
						success: false,
						status: 2,
						result: "Sorry, something went wrong.",
						data: null
					}
				}
			} else {
				result = await {
					success: false,
					status: 2,
					result: "Your connection was interrupted!",
					data: null
				}
			}
		})

	return result
}

export default {callApi}
