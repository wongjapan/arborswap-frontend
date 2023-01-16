import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0x9EcB46Dba8c5034E16675e7388Ad0A98538d4701',
      56: '0x9EcB46Dba8c5034E16675e7388Ad0A98538d4701',
    },
    depositAddress: {
      97: '0x6E61c635e929CC757A4E54ca74950032F03F93E8',
      56: '0x6E61c635e929CC757A4E54ca74950032F03F93E8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    isLock: false,
    rate: 4,
    tokenPerBlock: '10',
    sortOrder: 0,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0x5F621eE3ab46997b3514066E86462AA0835a822c',
      56: '0x5F621eE3ab46997b3514066E86462AA0835a822c',
    },
    depositAddress: {
      97: '0xe7f5e32a05Ce3ae93f1659594D6A7b00676d6F41',
      56: '0xe7f5e32a05Ce3ae93f1659594D6A7b00676d6F41',
    },
    poolCategory: PoolCategory.CORE,
    isLock: true,
    lockTime: 180,
    harvest: true,
    rate: 8,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.f4h,
    earningToken: tokens.f4h,
    contractAddress: {
      97: '0x76E091a0EDDCAa90A419959587A96bADD4370f83',
      56: '0x76E091a0EDDCAa90A419959587A96bADD4370f83',
    },
    depositAddress: {
      97: '0x759a803C7BdFb3CD5Be0D86faF060E613a169ce0',
      56: '0x759a803C7BdFb3CD5Be0D86faF060E613a169ce0',
    },
    poolCategory: PoolCategory.CORE,
    isLock: true,
    lockTime: 365,
    harvest: true,
    rate: 14,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
