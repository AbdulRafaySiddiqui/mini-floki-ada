import axios from 'axios'
import { API_URL } from 'src/assets/constants';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

/**  returns 
{
    "account": "0xd9eaf2b1d90306cb149e80274677a28b6bca37a7",
    "amount": "998990045064175898210",
    "rewards": "0",
    "signature": "0xbdf38b667c9f9e38f221cc296f8907b225be9972c03b4b3598001fd9875127e323ee959132fc852bebf0d0e613544f8cd254ec4c5586dd936643618d87a2f7321b",
    "nounce": "0",
    "deadline": 1634919973
}
*/
export const getTopHolders = async () => {
    const result = await api.get('top-holders')
    return result.data
}

export const getUserRewards = async (account) => {
    const result = await api.get(`user-rewards/${account}`)
    console.log(result)
    return result.data;
}