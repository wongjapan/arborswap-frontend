import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0x35D830500c217AD19ab24Ad3D08A06B6F88cC061',
      56: '0x35D830500c217AD19ab24Ad3D08A06B6F88cC061',
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
      97: '0x907be116635eF8F3F360f74A46c10F81434B6908',
      56: '0x907be116635eF8F3F360f74A46c10F81434B6908',
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
