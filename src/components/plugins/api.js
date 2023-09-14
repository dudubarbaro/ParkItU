import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backendparkitu-dev.fl0.io/api/'
})

export default api 