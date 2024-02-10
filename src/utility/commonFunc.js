import swal from "sweetalert"
import toastr from 'toastr'
import Cookies from "js-cookie"
// import * as constant from "../configs/constant"
import React from "react"
import Compress from "compress.js";


// const Compress = require("compress.js").default

export const REJECT_TXT = "REJECT"
export const APPROVE_TXT = "APPROVE"
export const WAIT_TXT = "WAIT"

export const sureTxt = "Are you sure you want to do this?"

export const notifyMessage = (msg, type, duration) => {
    let msgType = "error"

    if (type === 0) {
        msgType = "error"
    } else if (type === 1) {
        msgType = "success"
    } else if (type === 2) {
        msgType = "warning"
    }
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: true,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: true,
        onclick: null,
        showDuration: "2500",
        hideDuration: "2500",
        timeOut: duration === undefined ? "2500" : duration,
        extendedTimeOut: "2500",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }
    toastr[msgType](msg === undefined || msg === null ? "Please enter correct details" : msg, type === 0 ? 'Error' : type === 1 ? 'Success' : type === 2 ? 'Warning' : "Error")
}

export const helperText = (error) => {
    return error ? <span className="small text-danger">{error}</span> : null
}


export const onFileError = (error) => {
    notifyMessage(error.message)
}

export function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.addEventListener("load", () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

export const warningAlert = (msg, type, redirect) => {
    swal({
        title: msg,
        // icon: type === 0 ? 'success' : 'error',
        closeOnClickOutside: false,
        buttons: {
            dangerMode: {
                text: "Okay",
                value: "action",
                className: "okay-btn"
            }
        }
    })
        .then((value) => {
            switch (value) {

                case "action":
                    break
                default:
            }
        })
}

export const tempRefreshHandler = (msg) => {
    swal({
        title: msg ? msg : "The operation is successful",
        // icon: type === 0 ? 'success' : 'error',
        closeOnClickOutside: false,
        buttons: {
            dangerMode: {
                text: "Okay",
                value: "action",
                className: "okay-btn"
            }
        }
    })
        .then((value) => {
            switch (value) {
                case "action":
                    window.location.reload()
                    break
                default:
            }
        })
}

export const formatCurrency = (val) => {
    val = val === undefined ? 0 : val
    // return val.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '1,')
    return val.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const checkAuthHandler = async () => {
    // const isAuth = await Cookies.get(constant.ACCESS_TOKEN)
    // return !!isAuth
}
// export const compressImage = async (files) => {
//
// }
export const getTableHeader = (status) => {
    if (status === "INSPECTION_REPORT") {
        return <tr>
            <th>Document</th>
            <th>Report Type</th>
            <th>Cleaner Comment</th>
            <th>Photos</th>
        </tr>
    } else if (status === "REAL_TIME_DATA") {
        return <tr>
            <th>Client</th>
            <th>Site Key</th>
            <th>Site</th>
            <th>Login Server Receive Time</th>
            <th>Login GPS</th>
            <th>Logout Server Receive Time</th>
            <th>Logout GPS</th>
            <th>Forgot Logout Server Receive Time</th>
            <th>Cleaner Name</th>
            <th>Cleaner Photo</th>
            <th>Photo Match Ratio</th>
            <th>TOS (Mins)</th>
        </tr>
    } else if (status === "ATTENDANCE_REQ_REPORT_EMP") {
        return <tr>
            <th>Site Code</th>
            <th>Site Name</th>
            <th>Site Address</th>
            <th>Date</th>
            <th>Sign In Time</th>
            <th>Login GPS</th>
            <th>Sign Out Time</th>
            <th>Logout GPS</th>
            <th>Total Hours per Visit</th>
        </tr>
    } else if (status === "ATTENDANCE_REQ_REPORT_SITE") {
        return <tr>
            <th>Employee Code</th>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Sign In Time</th>
            <th>Login GPS</th>
            <th>Sign Out Time</th>
            <th>Logout GPS</th>
            <th>Total Hours per Visit</th>
        </tr>
    } else if (status === "INCIDENT_REQ_REPORT") {
        return <tr>
            <th>Incident Image</th>
            <th>Case No.</th>
            <th>Incident Date</th>
            <th>Reported Date</th>
            <th>Site Name</th>
            <th>Category</th>
            <th>Type of Issue</th>
            <th>Injury Type</th>
            <th>Responsible for following up</th>
        </tr>
    } else if (status === "INCIDENT_REQ_REPORT_FOR_SITE") {
        return <tr>
            {/*<th>Incident Image</th>*/}
            <th>Case No.</th>
            <th>Incident Date</th>
            <th>Reported Date</th>
            <th>Site Name</th>
            <th>Category</th>
            <th>Type of Issue</th>
            <th>Priority</th>
            <th>Raised by</th>
            <th>View & Download</th>
        </tr>
    } else if (status === "CLEANER_SITE") {
        return <tr>
            <th>Id</th>
            <th>Cleaner Name</th>
            <th>Action</th>
        </tr>
    } else if (status === "INCIDENT_REQ") {
        return <tr>
            <th>Case No.</th>
            <th>Incident DateTime</th>
            <th>Reported Date</th>
            <th>Site Name</th>
            <th>Category</th>
            <th>Type of Issue</th>
            <th>Status</th>
            <th>Responsible for following up</th>
            {/*<th>Close out Date</th>*/}
            <th>Actions</th>
        </tr>
    } else if (status === "COMPANY") {
        return <tr>
            <th>Company Name</th>
            <th>Owner</th>
            <th>Mobile Number</th>
            <th>Client</th>
            <th>Created By</th>
            <th>Actions</th>
        </tr>
    } else if (status === "SITES") {
        return <tr>
            <th>Id</th>
            <th>Site Name</th>
            <th>Company</th>
            <th>Manager</th>
            <th>Client</th>
            <th>Created By</th>
            {/*<th>QR Code</th>*/}
            <th>Actions</th>
        </tr>
    } else if (status === "INCIDENT_REQ_LOG") {
        return <tr>
            <th>Case No.</th>
            <th>Action</th>
            <th>Conducted by</th>
            <th>Conducted date</th>
        </tr>
    } else if (status === "SERVICE_REQ") {
        return <tr>
            <th>Case No.</th>
            <th>Created Date</th>
            <th>Company</th>
            <th>Site</th>
            <th>Category</th>
            <th>Status</th>
            <th>Raised By</th>
            <th>Actions</th>
        </tr>
    } else if (status === "SHIFT_REQ") {
        return <tr>
            <th>Schedule No.</th>
            <th>Created Date</th>
            <th>Company</th>
            <th>Site</th>
            <th>Client Name</th>
            <th>Actions</th>
        </tr>
    } else if (status === "SHIFT_REQ_ADMIN_APPROVE") {
        return <tr>
            <th>Schedule No.</th>
            <th>Created Date</th>
            <th>Allocate Date</th>
            <th>Company</th>
            <th>Site</th>
            {/*<th>Client Name</th>*/}
            <th>Actions</th>
        </tr>

    } else if (status === "EMPLOYEES") {
        return <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            {/*<th>NIC / Passport</th>*/}
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Created By</th>
            <th>Action</th>
        </tr>
    } else if (status === "EMPLOYEES_CURRENT") {
        return <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            {/*<th>NIC / Passport</th>*/}
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Created By</th>
            <th>Action</th>
        </tr>

    } else if (status === "EMPLOYEES_CURRENT_REJECT") {
        return <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            {/*<th>NIC / Passport</th>*/}
            <th>Mobile</th>
            <th>Reject Reason</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Created By</th>
            <th>Action</th>
        </tr>
    } else if (status === "ONLINE") {
        return <tr>
            <th>Image</th>
            <th>Zoom Title</th>
            <th>Meeting ID</th>
            <th>Join URL</th>
            <th className={"tbl-width-130_"}>Start DateTime</th>
            <th className={"tbl-width-130_"}>End DateTime</th>
            {/*<th>UUID</th>*/}
            <th>Status</th>
            <th>Action</th>
        </tr>
    } else if (status === "WORKOUT_VIDEO") {
        return <tr>
            <th>Image</th>
            <th>Video Name</th>
            <th>Workout</th>
            <th>Video URL</th>
            <th>Video Duration</th>
            <th>Recommend</th>
            <th>Watched Count</th>
            <th>Favourite Count</th>
            <th>Status</th>
            <th>Update</th>
            <th>Action</th>
        </tr>
    } else if (status === "RECIPES") {
        return <tr>
            <th>Image</th>
            <th>Name</th>
            {/*<th>Description</th>*/}
            <th>Meal Type</th>
            <th>Preparing Time</th>
            <th>Calories</th>
            <th>Rating</th>
            <th>Vegetarian</th>
            <th>Status</th>
            <th>Update</th>
            {/*<th>Active/ Inactive</th>*/}
        </tr>
    } else if (status === "WORKOUTS") {
        return <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Linked Videos</th>
            <th>Update</th>
            <th>Action</th>
        </tr>
    } else if (status === "PACKAGES") {
        return <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Default</th>
            <th>Price</th>
            <th>Status</th>
            <th>Subscribers</th>
            <th>Update</th>
            <th>Action</th>
        </tr>
    } else if (status === "ADMIN_USER") {
        return <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            {/*<th>Weight</th>*/}
            {/*<th>Height</th>*/}
            <th>DOB</th>
            <th>Status</th>
            <th>Update</th>
            {/*<th className={"align-center_"}>Action</th>*/}
        </tr>
    } else if (status === "ADDITIONAL_INFO") {
        return <tr>
            <th>Id</th>
            <th>Site</th>
            <th>Allocate Date</th>
            <th>Description</th>
            <th>Update</th>
        </tr>
    } else {
        return <tr>
            <th>Name</th>
            <th>Email</th>
            {/*<th className={"tbl-width-130"}>Description</th>*/}
            <th>Gender</th>
            <th>Weight</th>
            <th>Height</th>
            <th>DOB</th>
            <th>Status</th>
            {/*<th className={"align-center m-auto"}>Archived Packs</th>*/}
            <th className={"align-center m-auto"}>Subscribed Packages</th>
            <th className={"align-center m-auto"}>View Favourites</th>
            <th className={"align-center_"}>Action</th>
        </tr>
    }

}

export const getBase64FromUrl = async (url) => {
    // console.log("read...",url)
    const data = await fetch(url)
    const blob = await data.blob()
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = function () {
            const base64data = reader.result
            resolve(base64data)
        }
    })
}
export const getIPAddress = async () => {

}
export const pdfHandler = async () => {
    setTimeout(() => {
        window.print()
    }, 100)
}
// export const duration = (t0, t1) => {
//     let d = (new Date(t1)) - (new Date(t0))
//     let weekdays = Math.floor(d / 1000 / 60 / 60 / 24 / 7)
//     let days = Math.floor(d / 1000 / 60 / 60 / 24 - weekdays * 7)
//     let hours = Math.floor(d / 1000 / 60 / 60 - weekdays * 7 * 24 - days * 24)
//     let minutes = Math.floor(d / 1000 / 60 - weekdays * 7 * 24 * 60 - days * 24 * 60 - hours * 60)
//     let seconds = Math.floor(d / 1000 - weekdays * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60)
//     let milliseconds = Math.floor(d - weekdays * 7 * 24 * 60 * 60 * 1000 - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - seconds * 1000)
//     const t = {}
//     if (seconds > 0 && ((new Date(t1).getHours() > new Date(t0).getHours()) || (new Date(t1).getMinutes() > new Date(t0).getMinutes()))) minutes = minutes + 1
//         ['weekdays', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'].forEach(q => {
//         if (eval(q) > 0) {
//             t[q] = eval(q)
//         }
//     })
//     return t
// }

export async function dataUrlToFile(dataUrl, fileName) {
    const res = await fetch(dataUrl)
    const blob = await res.blob()
    return new File([blob], fileName, {type: 'image/png'})
}

export const compressImage = async (files, returnType) => {
    const compress = new Compress()

    return await compress.compress(files, {
        size: 4,
        quality: 0.4,
        maxWidth: 1600,
        maxHeight: 1600,
        resize: true
    })
        .then(async results => {
            // console.log(results)
            const img1 = results[0]

            if (returnType === 'Base64') return (img1.prefix + img1.data)
            else return await Compress.convertBase64ToFile(img1.data, img1.ext)
        })
}
