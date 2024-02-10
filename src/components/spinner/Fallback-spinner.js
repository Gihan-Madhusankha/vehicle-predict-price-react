import React from "react"
import "../../assets/scss/components/app-loader.scss"

const SpinnerComponent = () => (
    <div className="fallback-spinner vh-100">
        {/*<img className="fallback-logo" src={logo} alt="logo" />*/}
        <div className="loading">
            <div className="effect-1 effects" />
            <div className="effect-2 effects" />
            <div className="effect-3 effects" />
        </div>
    </div>
)

export default SpinnerComponent
