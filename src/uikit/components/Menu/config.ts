import { LinkStatus } from './types'

export const status = {
  LIVE: {
    text: 'LIVE',
    color: 'failure',
  } as LinkStatus,
  SOON: {
    text: 'SOON',
    color: 'warning',
  } as LinkStatus,
  NEW: {
    text: 'NEW',
    color: 'success',
  } as LinkStatus,
}

export const links = [
]

export const socials = [
  {
    label: 'Discord',
    icon: 'DiscordIcon',
    href: 'https://discord.gg/3sJryfwKzU',
  },
  {
    label: 'Telegram',
    icon: 'TelegramIcon',
    href: 'https://t.me/hyperjumpbsc',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/HyperJumpBSC',
  },
]

export const MENU_HEIGHT = 64
export const MENU_ENTRY_HEIGHT = 48
export const SIDEBAR_WIDTH_FULL = 240
export const SIDEBAR_WIDTH_REDUCED = 56
