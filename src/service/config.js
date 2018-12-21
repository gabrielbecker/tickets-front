import axios from 'axios'

export const  http = axios.create({
    baseURL: 'https://bt-tickets.herokuapp.com/'
})