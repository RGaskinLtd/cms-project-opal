import pageGroups from './pageGroups'
import { page } from './page'
import { settings } from './singletons/settings'

import blockContent from './blockContent'
import { heroBanner } from './pageBuilder/banner/hero'
import { card, cards } from './pageBuilder/cards/index'

export const schemaTypes = [
  // Document types
  page,
  pageGroups,

  // Singletons
  settings,

  // Other types
  blockContent,

  // Components
  heroBanner,
  card,
  cards
]
