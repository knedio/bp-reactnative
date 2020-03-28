import { authConstants, alertConstants } from '../_constants';
import { post } from '~_services/api.service';

export const authActions = {
    login,
    register,
    logout,
};

function login (payload) {
    return async (dispatch) => {
        try {
            const { data } = await post(`auth/login`, payload);
            return data;
        } catch (err) {
            throw err;
        }
    };
}

function register (payload) {
    return async (dispatch) => {
        try {
            const { data } = await post(`auth/register`, payload);
            return data;
        } catch (err) {
            throw err;
        }
    };
}

function logout (payload) {
    return async (dispatch) => {
        try {
            const { data } = await post(`auth/logout`, payload);
            return data;
        } catch (err) {
            throw err;
        }
    };
}