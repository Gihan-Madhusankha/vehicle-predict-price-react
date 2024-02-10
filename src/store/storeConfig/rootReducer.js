import {combineReducers} from "redux";
import authReducer from '../../store/domain/auth/reducer';
import spinnerReducer from '../../store/domain/spinner/reducer';
import postReducer from '../../store/domain/post/reducer';
import layoutReducer from '@src/redux/layout'


const rootReducer = combineReducers({
    auth: authReducer,
    spinner: spinnerReducer,
    layout: layoutReducer,
    post: postReducer
})

export default rootReducer