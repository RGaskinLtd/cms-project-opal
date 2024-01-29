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
import {productHighlightBanner} from './pageBuilder/banner/products'
import {productsNav} from './pageBuilder/banner/productNav'
import {ourProducts} from './pageBuilder/banner/ourProducts'
import {latestNews} from './pageBuilder/sections/latestNews'
import {highlightedNews} from './pageBuilder/sections/highlightedNews'
import {newsNavigator} from './pageBuilder/sections/newsNavigator'
import {issuersMap} from './pageBuilder/sections/issuersMap'
import {soloCta} from './pageBuilder/sections/soloCta'
import {accordion, accordions} from './pageBuilder/accordions'
import {easyRead} from './base/easyRead'
import {splitContent} from './pageBuilder/sections/splitContent'
import {imageBanner} from './pageBuilder/banner/imageBanner'
import {ourPeople} from './pageBuilder/banner/ourPeople'
import {people} from './documents/people'
import {contactInfo} from './pageBuilder/sections/contactInfo'
import {ourPartners} from './pageBuilder/banner/ourPartners'
import {multiInfoSection} from './pageBuilder/sections/multiInfoSection'

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
  splitContent,
  issuersMap,
  ourPeople,
  ourProducts,
  ourPartners,
  latestNews,
  highlightedNews,
  newsNavigator,
  contactInfo,
  content,
  stat,
  stats,
  cta,
  soloCta,

  // bespoke components
  productHighlightBanner,
  productsNav,
]
