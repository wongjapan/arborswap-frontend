import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserPendingReward } from 'state/actions'
import { harvestFarm } from 'utils/calls'
import { BIG_ZERO } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'
import { useMasterchef, useRewardWallet, useSousChef } from 'hooks/useContract'
import { DEFAULT_GAS_LIMIT_STAKE } from 'config'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT_STAKE,
}

const harvestPool = async (sousChefContract) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.withdrawRewards({ ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

const harvestPoolBnb = async (sousChefContract) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.deposit({ ...options, value: BIG_ZERO, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

const useHarvestPool = (sousId, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)
  const rewardContract = useRewardWallet(sousId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (sousId === 100000000) {
      await harvestFarm(masterChefContract, 0)
    } else if (sousId === 5 || sousId === 6) {
      await harvestPool(rewardContract)
    } else if (isUsingBnb) {
      await harvestPoolBnb(sousChefContract)
    } else {
      await harvestPool(sousChefContract)
    }
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, rewardContract, sousId])

  return { onReward: handleHarvest }
}

export default useHarvestPool
