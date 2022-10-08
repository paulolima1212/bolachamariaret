import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.243:4001/'
})

export { api }