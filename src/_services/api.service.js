import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from './global-variables';

const apiUrl = `${API_URL}/v1/`;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

let api = axios.create({
    baseURL: API_URL,
    headers,
});

// set token
export const setToken = async () => {
    axios.interceptors.request.use(async (request) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          request.headers.common['Authorization'] = `Bearer ${token}`
        }
        return request
    })
}

// Request Method for dynamic method
export const request = (method, url, payload = {}, headers = {}) => {
    return axios({
        headers,
    	method,
        url: apiUrl + url,
        [(method == 'GET') ? 'params' : 'data'] : payload,
    })
}

// GET Method
export const get = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
    	method: 'GET',
        url: apiUrl + url,
        params:payload
    })
}

// POST Method
export const post = (url, payload = {}, headers = {}, other = {}) => {
    return axios({
        headers,
        ...other,
        method: 'POST',
        url: apiUrl + url,
        data: payload
    })
}

// PUT Method
export const put = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'PUT',
        url: apiUrl + url,
        data: payload
    })
}

// PATCH Method
export const patch = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'PATCH',
        url: apiUrl + url,
        data: payload
    })
}

// DELETE Method
export const del = (url, payload = {}, headers = {}) => {
    return axios({
        headers,
        method: 'DELETE',
        url: apiUrl + url,
    })
}
