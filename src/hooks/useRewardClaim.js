import React, { useState } from 'react'
import { useWeb3, useContract } from '@react-dapp/wallet'
import tokenAbi from '../assets/contractts/token_abi.json'
import rewardClaimAbi from '../assets/contractts/reward_claim_abi.json'
import { TOKEN_ADDRESS, REWARD_CLAIM_ADDRESS } from '../assets/constants'
import { ethers } from 'ethers'

export const useNormalRewardClaim = (reload) => {
    const tokenContract = useContract(tokenAbi, TOKEN_ADDRESS)
    const { account } = useWeb3()

    const [txPending, setTxPending] = useState(false)

    const claim = async () => {
        setTxPending(true)
        try {
            await tokenContract.methods.claimReward().send({ from: account })
            if (reload)
                reload()
        } catch (e) {
            console.log(e)
        }
        setTxPending(false)
    }

    return { claim, txPending }
}

export const useTopHolderRewardClaim = (reload) => {
    const rewardContract = useContract(rewardClaimAbi, REWARD_CLAIM_ADDRESS)
    const { account } = useWeb3()
    const [txPending, setTxPending] = useState(false)

    const claim = async ({ rewards, deadline, signature }) => {
        setTxPending(true)
        try {
            const { v, r, s } = ethers.utils.splitSignature(signature)
            await rewardContract.methods.claimRewards(account, rewards.split('.')[0], deadline, v, r, s).send({ from: account })
            if (reload)
                reload()
        } catch (e) {
            console.log(e)
        }
        setTxPending(false)
    }

    return { claim, txPending }
}