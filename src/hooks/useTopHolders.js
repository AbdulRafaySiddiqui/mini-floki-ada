import React, { useEffect, useState } from 'react';
import { getTopHolders } from 'src/api/rewardInfo';
import BigNumber from 'bignumber.js'
import { toLower } from '@react-dapp/wallet';

const useTopHolders = () => {
    const [topHolders, setTopHolders] = useState([])

    const fetch = async () => {
        let data = await getTopHolders();
        if (data.length > 0) {
            data = data.map((e) => {
                return {
                    ...e,
                    amount: toLower(e.amount, 9).toFormat(2)
                }
            })
            setTopHolders(data);
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return topHolders
}

export default useTopHolders