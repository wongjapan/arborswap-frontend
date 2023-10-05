import { useMemo } from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useWeb3React } from '@web3-react/core'
import {
  getBep20Contract,
  getCakeContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getProfileContract,
  getMasterchefContract,
  getPointCenterIfoContract,
  getSouschefContract,
  getClaimRefundContract,
  getTradingCompetitionContract,
  getEasterNftContract,
  getCakeVaultContract,
  getPredictionsContract,
  getChainlinkOracleContract,
  getSouschefV2Contract,
  getLotteryV2Contract,
  getBunnySpecialCakeVaultContract,
  getBunnySpecialPredictionContract,
  getFarmAuctionContract,
  getBunnySpecialLotteryContract,
  getDepositContract,
  getMembershipContract,
  getRewardContract,
} from 'utils/contractHelpers'
import { getMulticallAddress } from 'utils/addressHelpers'

// Imports below migrated from Exchange useContract.ts
import { Contract } from '@ethersproject/contracts'
import { ChainId, WETH } from '@arborswap/sdk'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import ENS_PUBLIC_RESOLVER_ABI from '../config/abi/ens-public-resolver.json'
import ENS_ABI from '../config/abi/ens-registrar.json'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ERC20_ABI from '../config/abi/erc20.json'
import WETH_ABI from '../config/abi/weth.json'
import multiCallAbi from '../config/abi/Multicall.json'
import { getContract } from '../utils'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export const useERC20 = (address: string) => {
  const { provider } = useWeb3React()
  const { library } = useActiveWeb3React()

  const activeLibrary = library ? library.getSigner() : provider
  // console.log({ activeLibrary })

  return useMemo(() => getBep20Contract(address, activeLibrary), [activeLibrary, address])
}

export const useMembership = (address: string) => {
  const { provider } = useWeb3React()
  const { library } = useActiveWeb3React()

  const activeLibrary = library ? library.getSigner() : provider
  // console.log({ activeLibrary })

  return useMemo(() => getMembershipContract(address, activeLibrary), [activeLibrary, address])
}

export const useCake = () => {
  const { provider } = useWeb3React()
  const { library } = useActiveWeb3React()

  const activeLibrary = library ? library.getSigner() : provider
  return useMemo(() => getCakeContract(activeLibrary), [activeLibrary])
}

export const useBunnyFactory = () => {
  const { library } = useActiveWeb3React()

  return useMemo(() => getBunnyFactoryContract(library.getSigner()), [library])
}

export const usePancakeRabbits = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPancakeRabbitContract(library.getSigner()), [library])
}

export const useProfile = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getProfileContract(library.getSigner()), [library])
}

export const useLotteryV2Contract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getLotteryV2Contract(library.getSigner()), [library])
}

export const useMasterchef = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getMasterchefContract(library.getSigner()), [library])
}

export const useSousChef = (id) => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getSouschefContract(id, library.getSigner()), [id, library])
}

export const useDepositWallet = (id) => {
  const { provider } = useWeb3React()
  const { library } = useActiveWeb3React()

  const activeLibrary = library ? library.getSigner() : provider
  return useMemo(() => getDepositContract(id, activeLibrary), [id, activeLibrary])
}

export const useRewardWallet = (id) => {
  const { provider } = useWeb3React()
  const { library } = useActiveWeb3React()

  const activeLibrary = library ? library.getSigner() : provider
  return useMemo(() => getRewardContract(id, activeLibrary), [id, activeLibrary])
}

export const useSousChefV2 = (id) => {
  const { provider } = useWeb3React()
  const { library } = useActiveWeb3React()

  const activeLibrary = library ? library.getSigner() : provider

  return useMemo(() => getSouschefV2Contract(id, activeLibrary), [id, activeLibrary])
}

export const usePointCenterIfoContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPointCenterIfoContract(library.getSigner()), [library])
}

export const useBunnySpecialContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialContract(library.getSigner()), [library])
}

export const useClaimRefundContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getClaimRefundContract(library.getSigner()), [library])
}

export const useTradingCompetitionContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getTradingCompetitionContract(library.getSigner()), [library])
}

export const useEasterNftContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getEasterNftContract(library.getSigner()), [library])
}

export const useCakeVaultContract = () => {
  const { provider } = useActiveWeb3React()
  return useMemo(() => getCakeVaultContract(provider), [provider])
}

export const usePredictionsContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getPredictionsContract(library.getSigner()), [library])
}

export const useChainlinkOracleContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getChainlinkOracleContract(library.getSigner()), [library])
}

export const useSpecialBunnyCakeVaultContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialCakeVaultContract(library.getSigner()), [library])
}

export const useSpecialBunnyPredictionContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialPredictionContract(library.getSigner()), [library])
}

export const useBunnySpecialLotteryContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getBunnySpecialLotteryContract(library.getSigner()), [library])
}

export const useFarmAuctionContract = () => {
  const { account, library } = useActiveWeb3React()
  // This hook is slightly different from others
  // Calls were failing if unconnected user goes to farm auction page
  // Using library instead of library.getSigner() fixes the problem for unconnected users
  // However, this fix is not ideal, it currently has following behavior:
  // - If you visit Farm Auction page coming from some other page there are no errors in console (unconnected or connected)
  // - If you go directly to Farm Auction page
  //   - as unconnected user you don't see any console errors
  //   - as connected user you see `unknown account #0 (operation="getAddress", code=UNSUPPORTED_OPERATION, ...` errors
  //     the functionality of the page is not affected, data is loading fine and you can interact with the contract
  //
  // Similar behavior was also noticed on Trading Competition page.
  return useMemo(() => getFarmAuctionContract(account ? library.getSigner() : library), [library, account])
}

// Code below migrated from Exchange useContract.ts

// returns null on errors

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
  const { chainId } = useActiveWeb3React()
  let address: string | undefined
  if (chainId) {
    // eslint-disable-next-line default-case
    switch (chainId) {
      case ChainId.MAINNET:
      case ChainId.TESTNET:
        address = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
        break
    }
  }
  return useContract(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(pairAddress, IUniswapV2PairABI, withSignerIfPossible)
}

export function useMulticallContract(): Contract | null {
  return useContract(getMulticallAddress(), multiCallAbi, false)
}
