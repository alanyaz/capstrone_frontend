import axios from 'axios'
const baseURL = `http://localhost:5000`

export const login = async (data) => {
    try {
        const resp = await axios.post(baseURL + "/api/user/login" , data)
        console.log({resp})
        return resp.data;
    } catch (error) {
        return error
    }

}
export const register = async (data) => {
    try {
        const resp = await axios.post(baseURL + "/api/user/signup" , data)
        console.log({resp})
        return resp.data;
    } catch (error) {
        return error
    }

}