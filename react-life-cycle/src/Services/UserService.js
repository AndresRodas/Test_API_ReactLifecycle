import axios from 'axios'
const host = process.env.REACT_APP_SERVER

export const GetUsers = async () => {
    try {
        return await axios.get(`${host}/users`).then(res => {
            return res.data
        })
    } catch (e) {
        console.log(e)
        return null
    }
}

