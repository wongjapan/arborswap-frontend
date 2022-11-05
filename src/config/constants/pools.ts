import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0xA21F1bE7C9238D1FD2dD188930feFff425a806BA',
      56: '0xA21F1bE7C9238D1FD2dD188930feFff425a806BA',
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
      97: '0x427ad43f1dFd35A437034539B0fa42b7b26f845d',
      56: '0x427ad43f1dFd35A437034539B0fa42b7b26f845d',
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
