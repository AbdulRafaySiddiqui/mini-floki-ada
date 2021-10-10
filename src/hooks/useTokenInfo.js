import React, { useState, useEffect } from 'react'
import { useWeb3, useContract, getTimeLeft } from '@react-dapp/wallet'
import tokenAbi from '../assets/contractts/token_abi.json'
import rewardClaimAbi from '../assets/contractts/reward_claim_abi.json'
import { TOKEN_ADDRESS, REWARD_CLAIM_ADDRESS, ADA_ADDRESS } from '../assets/constants'
import { Multicall } from 'ethereum-multicall'
import BigNumber from 'bignumber.js'

const useTokenInfo = () => {
    const { web3, account } = useWeb3();
    const [rewardTokenBalance, setRewardTokenBalance] = useState(0)
    const [tokenBalance, setTokenBalance] = useState(0)
    const [reward, setReward] = useState(0)
    const [claimTimeLeft, setClaimTimeLeft] = useState(undefined)

    useEffect(() => {
        const fetch = async () => {
            const multicall = new Multicall({ web3Instance: web3, tryAggregate: true });

            const call = [
                {
                    reference: 'tokenBalance',
                    contractAddress: TOKEN_ADDRESS,
                    abi: tokenAbi,
                    calls: [{ reference: 'tokenBalance', methodName: 'balanceOf', methodParameters: [account] }]
                },
                {
                    reference: 'rewardTokenBalance',
                    contractAddress: ADA_ADDRESS,
                    abi: tokenAbi,
                    calls: [{ reference: 'rewardTokenBalance', methodName: 'balanceOf', methodParameters: [account] }]
                },
                {
                    reference: 'calculateReward',
                    contractAddress: TOKEN_ADDRESS,
                    abi: tokenAbi,
                    calls: [{ reference: 'calculateReward', methodName: 'calculateReward', methodParameters: [account] }]
                },
                {
                    reference: 'nextAvailableClaimDate',
                    contractAddress: TOKEN_ADDRESS,
                    abi: tokenAbi,
                    calls: [{ reference: 'nextAvailableClaimDate', methodName: 'nextAvailableClaimDate', methodParameters: [account] }]
                },

            ]
            const result = (await multicall.call(call)).results;
            setTokenBalance(new BigNumber(result.tokenBalance.callsReturnContext[0].returnValues[0].hex).div(new BigNumber(10).exponentiatedBy(9)).toFixed(2))
            setRewardTokenBalance(new BigNumber(result.rewardTokenBalance.callsReturnContext[0].returnValues[0].hex).div(new BigNumber(10).exponentiatedBy(18)).toFixed(2))
            setReward(new BigNumber(result.calculateReward.callsReturnContext[0].returnValues[0].hex).div(new BigNumber(10).toExponential(9)).toFixed(2))
            setClaimTimeLeft(new BigNumber(result.nextAvailableClaimDate.callsReturnContext[0].returnValues[0].hex))

            const token = new web3.eth.Contract(tokenAbi, TOKEN_ADDRESS);
            const blockNumber = await web3.eth.getBlockNumber();
            let options = {
                fromBlock: blockNumber - 4000, toBlock: 'latest'
            }
            if (account) options['filter'] = { recipient: [account] }
            const events = await token.getPastEvents('RewardClaimedSuccessfully', options);

            console.log(events);
        }

        if (account && web3)
            fetch();

    }, [web3, account])

    return { tokenBalance, rewardTokenBalance, reward, claimTimeLeft }
}

export default useTokenInfo;