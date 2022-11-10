import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0xB9292782a4d96Fe4feC35C4603079fE33862f54d',
      56: '0xB9292782a4d96Fe4feC35C4603079fE33862f54d',
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
      97: '0x2a1c078a8e66cc6726413A1F21eaa23c278642e2',
      56: '0x2a1c078a8e66cc6726413A1F21eaa23c278642e2',
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
