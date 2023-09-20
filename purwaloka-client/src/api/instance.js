import axios from 'axios';

function ApiInstance(authrorization = null){
    return axios.create({
        baseURL: process.env.REACT_APP_URL, 
        headers: {
            authrorization
        }
    })
}

export const Instance = ApiInstance