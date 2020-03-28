import { combineReducers } from 'redux';
import auth from './auth.reducer';
import alert from './alert.reducer';

const appReducer  = combineReducers({
    auth,
    alert,
})

const rootReducer = (state, action) => appReducer(
    (action.type === 'RESET_APP') ? undefined : state, 
    action
)

export default rootReducer;