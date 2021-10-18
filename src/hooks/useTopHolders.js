import React, { useEffect, useState } from 'react';
import { getTopHolders } from 'src/api/rewardInfo';
import BigNumber from 'bignumber.js'

const useTopHolders = () => {
    const [topHolders, setTopHolders] = useState([])

    const fetch = async () => {
        let data = await getTopHolders();
        data = data.map((e) => {
            return {
                ...e,
                amount: new BigNumber(e.amount).div(new BigNumber(10).exponentiatedBy(18)).toFixed(2)
            }
        })
        setTopHolders(data);
    }

    useEffect(() => {
        fetch()
    }, [])

    return topHolders
}

export default useTopHolders