import React, { useEffect, useState } from 'react';
import { getTopHolders } from 'src/api/rewardInfo';

const useTopHolders = () => {
    const [topHolders, setTopHolders] = useState([])

    const fetch = async () => {
        const data = await getTopHolders();
        setTopHolders(data);
    }

    useEffect(() => {
        fetch()
    }, [])

    return topHolders
}

export default useTopHolders