import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SafeSale',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://swap.safesale.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SafeSale')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SafeSale')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SafeSale')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SafeSale')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SafeSale')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SafeSale')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('SafeSale')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SafeSale')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SafeSale')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('SafeSale')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('SafeSale')}`,
      }
    default:
      return null
  }
}
