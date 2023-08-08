
import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://micasa-98268-default-rtdb.firebaseio.com'
})

export default journalApi
