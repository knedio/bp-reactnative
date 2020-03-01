import axios from 'axios';
import { API_URL } from './global-variables';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const api = axios.create({
    baseURL: API_URL,
    headers,
});

const version = '/v2';

// set token
export const setToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token !== null){
        api.setHeaders({
            ...headers,
            'Authorization': 'Bearer ' + token,
        });
    } else {
        delete api.headers['Authorization']
    };
}

// Request Method for dynamic method
export const request = (method, url, payload = {}, headers = {}) => {
    return axios({
        headers,
    	method,
        url: API_URL + version + url,
        [(method == 'GET') ? 'params' : 'data'] : payload,
    })
}

// GET Method
export const get = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
    	method: 'GET',
        url: API_URL + version + url,
        params:payload
    })
}

// POST Method
export const post = (url, payload = {}, headers = {}, other = {}) => {
    return axios({
        headers,
        ...other,
        method: 'POST',
        url: API_URL + version + url,
        data: payload
    })
}

// PUT Method
export const put = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'PUT',
        url: API_URL + version + url,
        data: payload
    })
}

// PATCH Method
export const patch = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'PATCH',
        url: API_URL + version + url,
        data: payload
    })
}

// DELETE Method
export const del = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'DELETE',
        url: API_URL + version + url,
    })
}
