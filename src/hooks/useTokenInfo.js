import React, { useState, useEffect } from 'react'
import { useWeb3, useContract, getTimeLeft, useUSDLp } from '@react-dapp/wallet'
import tokenAbi from '../assets/contractts/token_abi.json'
import rewardClaimAbi from '../assets/contractts/reward_claim_abi.json'
import { TOKEN_ADDRESS, REWARD_CLAIM_ADDRESS, ADA_ADDRESS } from '../assets/constants'
import { Multicall } from 'ethereum-multicall'
import BigNumber from 'bignumber.js'
import { getUserRewards } from '../api/rewardInfo'

const useReload = () => {
    const [value, setValue] = useState(0);

    const reload = () => {
        setValue(e => e + 1)
    }

    return { reload, reloadable: value };
}

const useTokenInfo = () => {
    const { reload, reloadable } = useReload()
    const { web3, account } = useWeb3();
    const [rewardTokenBalance, setRewardTokenBalance] = useState(0)
    const [tokenBalance, setTokenBalance] = useState(0)
    const [reward, setReward] = useState(0)
    const [claimTimeLeft, setClaimTimeLeft] = useState(undefined)
    const [topHolderReward, setTopHolderReward] = useState({ rewards: 0 })
    const [totalRewards, setTotalRewards] = useState(0)
    const [topHolderTotalRewards, setTopHolderTotalRewards] = useState(0)
    const [totalUserTopReward, setTotalUserTopReward] = useState(0)

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
                {
                    reference: 'totalRewards',
                    contractAddress: ADA_ADDRESS,
                    abi: tokenAbi,
                    calls: [{ reference: 'totalRewards', methodName: 'balanceOf', methodParameters: [TOKEN_ADDRESS] }]
                },
                {
                    reference: 'currentRewardCycle',
                    contractAddress: REWARD_CLAIM_ADDRESS,
                    abi: rewardClaimAbi,
                    calls: [{ reference: 'currentRewardCycle', methodName: 'currentRewardCycle', methodParameters: [] }]
                },
                {
                    reference: 'currentNonce',
                    contractAddress: REWARD_CLAIM_ADDRESS,
                    abi: rewardClaimAbi,
                    calls: [{ reference: 'currentNonce', methodName: 'nonces', methodParameters: [account] }]
                },
                {
                    reference: 'totalUserRewards',
                    contractAddress: REWARD_CLAIM_ADDRESS,
                    abi: rewardClaimAbi,
                    calls: [{ reference: 'totalUserRewards', methodName: 'userClaimedRewards', methodParameters: [account] }]
                },
            ]
            const result = (await multicall.call(call)).results;
            setTokenBalance(new BigNumber(result.tokenBalance.callsReturnContext[0].returnValues[0].hex).div(new BigNumber(10).exponentiatedBy(9)).toFixed(2))
            setRewardTokenBalance(new BigNumber(result.rewardTokenBalance.callsReturnContext[0].returnValues[0].hex).div(new BigNumber(10).exponentiatedBy(18)).toFixed(2))
            setReward(new BigNumber(result.calculateReward.callsReturnContext[0].returnValues[0].hex).div(new BigNumber(10).exponentiatedBy(18)).toFixed(2))
            setClaimTimeLeft(new BigNumber(result.nextAvailableClaimDate.callsReturnContext[0].returnValues[0].hex))
            setTotalRewards(new BigNumber(result.totalRewards.callsReturnContext[0].returnValues[0].hex)
                .div(new BigNumber(10).exponentiatedBy(18)).toFormat(0))
            setTotalUserTopReward((new BigNumber(result.totalUserRewards.callsReturnContext[0].returnValues[0].hex)
                .div(new BigNumber(10).exponentiatedBy(18)).toFormat(0)));


            const rewardCycle = new BigNumber(result.currentRewardCycle.callsReturnContext[0].returnValues[0].hex).toNumber()
            const rewardContract = new web3.eth.Contract(rewardClaimAbi, REWARD_CLAIM_ADDRESS)
            const _topHolderReward = await rewardContract.methods.rewards(rewardCycle).call()
            setTopHolderTotalRewards(new BigNumber(_topHolderReward).div(new BigNumber(10).exponentiatedBy(18)).toFormat(0))

            // const _topRewards = await getUserRewards('0xa77a5594597F0f8198E5cc9Dc82D628050CbE744')
            // const currentNonce = new BigNumber(result.currentNonce.callsReturnContext[0].returnValues[0].hex).toNumber()
            // console.log(currentNonce === _topRewards.nonce, currentNonce, _topRewards.nonce)
            // setTopHolderReward(_topRewards)
            // if (currentNonce === _topRewards.nonce)
            // else
            //     setTopHolderReward({ acount: account, reward: 0, amount: 0, nounce: 0, deadline: 0, signature: null })

            // const token = new web3.eth.Contract(tokenAbi, TOKEN_ADDRESS);
            // const blockNumber = await web3.eth.getBlockNumber();
            // let options = {
            //     fromBlock: blockNumber - 4000, toBlock: 'latest'
            // }
            // if (account) options['filter'] = { recipient: [account] }
            // const events = await token.getPastEvents('RewardClaimedSuccessfully', options);

        }

        if (account && web3)
            fetch();

    }, [web3, account, reloadable])

    return { totalUserTopReward, tokenBalance, rewardTokenBalance, reward, claimTimeLeft, topHolderReward, totalRewards, topHolderTotalRewards, reload }
}

export default useTokenInfo;