import { authConstants } from '../_constants';

const initialState = {
    loggedUser: {},
}

export default auth = ( state = initialState , {type, payload} ) => {
    switch ( type ) {
        case authConstants.LOGGED_USER:
            return;
        default:
            return state;
    }
}