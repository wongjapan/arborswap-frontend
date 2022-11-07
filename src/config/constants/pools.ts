import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0x7aAE6E5dC5596F1563b34bE7d917B476568EFaF4',
      56: '0x7aAE6E5dC5596F1563b34bE7d917B476568EFaF4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    isLock: false,
    rate: 5,
    tokenPerBlock: '10',
    sortOrder: 0,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0x7e222f9fF78b5A3Ce7d7Bb8AD5eEB87e04117102',
      56: '0x7e222f9fF78b5A3Ce7d7Bb8AD5eEB87e04117102',
    },
    poolCategory: PoolCategory.CORE,
    isLock: true,
    lockTime: 60,
    harvest: true,
    rate: 10,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
