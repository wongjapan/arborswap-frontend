import { MenuEntry } from '@arborswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/add',
      },
      {
        label: t('Limit Orders'),
        href: '/pool',
      },
    ],
  },
  // {
  //   label: t('Farms'),
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: t('More Products'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Launchpad'),
        href: '#1',
      },
      {
        label: t('Locker'),
        href: 'http://lock.arborswap.org/',
      },
      {
        label: t('Airdropper'),
        href: '#3',
      },
    ],
  },
]

export default config
