/* eslint-disable */
import React from 'react'
import {connect} from 'react-redux'
import './Delay.scss'
import CustomizedProgressBar from "./CustomizeProgress"

const App = (props) => {
    return props.isSpinner ?
        <div className={"delay-form"}>
            <div className="ui segment" id="data-fetch-loader">
                <div className="ui active inverted dimmer">
                    <div className="ui text loader d-flex align-items-center justify-content-center">
                        {/*<Icon className='swal2-success-circular-line' icon="line-md:loading-twotone-loop" color="#f7941d" width="40" height="40" />*/}
                        <CustomizedProgressBar/>
                    </div>
                </div>
                <p/>
            </div>
        </div>
        : null
};

const mapStateToProps = (state) => ({
    isSpinner: state.spinner.isSpinner,

});

export default connect(mapStateToProps, null)(App);

