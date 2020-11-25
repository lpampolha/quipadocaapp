import axios from 'axios'

//const localUrlApi = `http://localhost:3001`
const localUrlApi = `https://quipadocaapi.herokuapp.com/`

const http = axios.create({
    baseURL: process.env.REACT_APP_API || localUrlApi
})

http.defaults.headers['Content-type'] = 'application/json'


export default http;