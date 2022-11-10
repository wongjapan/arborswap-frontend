import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0x710d02D9dE326e14F63c1E1a201Cd3A50570E3EC',
      56: '0x710d02D9dE326e14F63c1E1a201Cd3A50570E3EC',
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
      97: '0x76F1f763CC4ab6220f61Fc016343B456E7ddc8F7',
      56: '0x76F1f763CC4ab6220f61Fc016343B456E7ddc8F7',
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
