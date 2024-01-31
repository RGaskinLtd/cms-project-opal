// Primary Documents
import {page} from './documents/page'
import {news} from './documents/news'
import {section} from './documents/section'

// Secondary Documents
import newsTags from './documents/groups/newsTags'
import pageGroups from './documents/groups/pageGroups'

// Singleton Documents
import {settings} from './documents/singletons/settings'

// Sanity Components
import {blockContent} from './base/blockContent'
import {basicBlockContent} from './base/basicBlockContent'
import {colorPicker} from './base/colorPicker'
import {externalUrl} from './base/externalUrl'
import {youtube} from './base/youtubeVideo'
import {theme} from './base/theme'

// Main Components
import {heroBanner} from './pageBuilder/banner/hero'
import {cardShortArticle, cardSummary, cards} from './pageBuilder/cards/index'
import {infoSection} from './pageBuilder/sections/infoSection'
import {content} from './pageBuilder/content'
import {stats, stat} from './pageBuilder/stats'
import {cta} from './pageBuilder/cta'
import {ourProducts} from './pageBuilder/banner/ourProducts'
import {latestNews} from './pageBuilder/sections/latestNews'
import {highlightedNews} from './pageBuilder/sections/highlightedNews'
import {newsNavigator} from './pageBuilder/sections/newsNavigator'
import {soloCta} from './pageBuilder/sections/soloCta'
import {accordion, accordions} from './pageBuilder/accordions'
import {easyRead} from './base/easyRead'
import {splitContent} from './pageBuilder/sections/splitContent'
import {imageBanner} from './pageBuilder/banner/imageBanner'
import {ourPeople} from './pageBuilder/banner/ourPeople'
import {people} from './documents/people'
import {ourPartners} from './pageBuilder/banner/ourPartners'
import {multiInfoSection} from './pageBuilder/sections/multiInfoSection'
import {splitImages} from './pageBuilder/sections/splitImages'

export const schemaTypes = [
  // Document types
  page,
  news,
  people,
  section,
  newsTags,
  pageGroups,

  // Singletons
  settings,

  // Other types
  basicBlockContent,
  blockContent,
  colorPicker,
  externalUrl,
  youtube,
  theme,
  easyRead,

  // Components
  heroBanner,
  imageBanner,
  cardShortArticle,
  cardSummary,
  cards,
  accordion,
  accordions,
  multiInfoSection,
  infoSection,
  splitImages,
  splitContent,
  ourPeople,
  ourProducts,
  ourPartners,
  latestNews,
  highlightedNews,
  newsNavigator,
  content,
  stat,
  stats,
  cta,
  soloCta,
]
