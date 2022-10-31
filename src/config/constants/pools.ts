import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0xA21F1bE7C9238D1FD2dD188930feFff425a806BA',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 0,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0xA21F1bE7C9238D1FD2dD188930feFff425a806BA',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 2,
    isFinished: false,
  },
]

export default pools
