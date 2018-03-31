import axios from 'axios'

export const endpoints = {
    baseURL: 'https://gms-test.herokuapp.com/'
}

const HTTP = axios.create({
    baseURL: endpoints.baseURL,
    headers: {
        Authorization: `Token token=${window.sessionStorage.getItem("auth_token")}, identifier=${window.sessionStorage.getItem("user_name")}`,
        'Content-Type': 'application/json'
    }
})

export default HTTP
