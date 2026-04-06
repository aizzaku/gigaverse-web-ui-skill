/**
 * Shared Tailwind CDN config for all demo pages.
 * Token values match tokens.css — that file is the inspectable source of truth.
 * This file exists because Tailwind CDN needs a JS config object for JIT.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'giga-navy': '#060b14',
        'giga-panel': '#081420',
        'giga-card': '#0a1e2e',
        'giga-dark-card': '#070d18',
        'giga-overlay': '#02060c',
        'giga-heading': '#e0e0e0',
        'giga-muted': '#7a8a9e',
        'giga-gold': '#F5C563',
        'giga-gold-light': '#F5D06B',
        'giga-gold-dark': '#E89B0C',
        'giga-button-text': '#3a1e00',
        'giga-teal': '#0483AB',
        'giga-cyan': '#02C7D7',
        'giga-green': '#3dd94e',
        'giga-green-light': '#78FD95',
        'giga-sky': '#4FC3F7',
        'giga-lavender': '#CC86CB',
        'giga-discord': '#7C3AED',
        'giga-live': '#ff7a7a',
        'giga-live-bg': '#5a1111',
        'giga-live-text': '#ffb2b2',
        'giga-border': 'rgba(4,131,171,0.2)',
        'giga-border-dark': '#0c2030',
        'faction-crusader': '#C32454',
        'faction-overseer': '#EB4F36',
        'faction-athena': '#9026CD',
        'faction-archon': '#0383AC',
        'faction-foxglove': '#229062',
        'faction-chobo': '#C7DCD0',
        'faction-summoner': '#FEC733',
        'faction-gigus': '#562344',
        'faction-crusader-light': '#FA4D4D',
        'faction-overseer-light': '#EB8575',
        'faction-athena-light': '#CC86CB',
        'faction-archon-light': '#88FFEB',
        'faction-foxglove-light': '#78FD95',
        'faction-chobo-light': '#FFFFFF',
        'faction-summoner-light': '#FFC833',
        'faction-gigus-light': '#A85E8E',
        'rarity-common': '#E6E6E6',
        'rarity-uncommon': '#4DCC4D',
        'rarity-rare': '#4D4DFF',
        'rarity-epic': '#CC33CC',
        'rarity-legendary': '#FFCC00',
        'rarity-relic': '#CC4D00',
        'rarity-giga': '#FFCC33',
      },
      fontFamily: {
        'bitcell': ['VT323', 'monospace'],
        'm5x7': ['VT323', 'monospace'],
      }
    }
  }
}
