import React, { useState } from 'react'
import { useWeb3, useContract } from '@react-dapp/wallet'
import tokenAbi from '../assets/contractts/token_abi.json'
import rewardClaimAbi from '../assets/contractts/reward_claim_abi.json'
import { TOKEN_ADDRESS, REWARD_CLAIM_ADDRESS } from '../assets/constants'

export const useNormalRewardClaim = () => {
    const contract = useContract(tokenAbi, TOKEN_ADDRESS)
    const { account } = useWeb3()

    const [txPending, setTxPending] = useState(false)

    const claim = async () => {
        setTxPending(true)
        try {
            await contract.methods.claimReward().send({ from: account })
        } catch (e) {
            console.log(e)
        }
        setTxPending(false)
    }

    return { claim, txPending }
}

export const useTopHolderRewardClaim = () => {
    const contract = useContract(rewardClaimAbi, REWARD_CLAIM_ADDRESS)
    const { account } = useWeb3()

    const [txPending, setTxPending] = useState(false)

    const claim = () => {
        setTxPending(true)
        try {
            // await contract.methods.claim().send({ from: account })
        } catch (e) {
            console.log(e)
        }
        setTxPending(false)
    }

    return { claim, txPending }
}