
import axios from 'axios';
import { BASE_URL } from './Api';
async function Get(token, param3, param4) {
    let url = BASE_URL ;
    let header = {
        headers: token
            ? {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
            : {
                'Content-Type': 'application/json',
            },
    };
    let response = await axios.get(url, header);
    return response.data;
}
export default Get;
