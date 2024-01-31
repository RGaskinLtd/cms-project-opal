import {defineArrayMember, defineField, defineType} from 'sanity'
import {FcDocument as icon} from 'react-icons/fc'

const hiddenResuableSections = ['productsNav']

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Pages',
  icon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      hidden: ({document, value}) => {
        if (value) {
          return false
        }
        if (!document?.title) {
          return true
        }
        const title = document?.title as string
        return title.toLowerCase() === 'news'
      },
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
          title: 'Hero',
        }),
        defineArrayMember({
          name: 'imageBanner',
          type: 'imageBanner',
          title: 'Image Banner',
        }),
        defineArrayMember({
          name: 'stats',
          type: 'stats',
          title: 'Stats',
        }),
        defineArrayMember({
          name: 'cards',
          type: 'cards',
          title: 'Cards'
        }),
        defineArrayMember({
          name: 'accordions',
          type: 'accordions',
          title: 'Accordions'
        }),
        defineArrayMember({
          name: 'multiInfoSection',
          type: 'multiInfoSection',
          title: 'Multi Info Section',
        }),
        defineArrayMember({
          name: 'infoSection',
          type: 'infoSection',
          title: 'Info Section',
        }),
        defineArrayMember({
          name: 'splitContent',
          type: 'splitContent',
          title: 'Split Content',
        }),
        defineArrayMember({
          name: 'splitImages',
          type: 'splitImages',
          title: 'Split Images',
        }),
        defineArrayMember({
          name: 'ourPeople',
          type: 'ourPeople',
          title: 'Our People',
        }),
        defineArrayMember({
          name: 'content',
          type: 'content',
          title: 'Rich Text Content',
        }),
        defineArrayMember({
          name: 'ourProducts',
          type: 'ourProducts',
          title: 'Our Products',
        }),
        defineArrayMember({
          name: 'ourPartners',
          type: 'ourPartners',
          title: 'Our Partners',
        }),
        defineArrayMember({
          name: 'latestNews',
          type: 'latestNews',
          title: 'Latest News',
        }),
        defineArrayMember({
          name: 'soloCta',
          type: 'soloCta',
          title: 'Solo CTA'
        }),
        defineArrayMember({
          title: 'Reusable Section',
          type: 'reference',
          to: [{type: 'section'}],
          options: {
            filter: '!(content[0]._type in $hiddenResuableSections)',
            filterParams: {
              hiddenResuableSections: hiddenResuableSections
            }
          },
        }),
      ],
    }),
    defineField({
      name: 'newsPageBuilder',
      type: 'array',
      title: 'News Page builder',
      hidden: ({document, value}) => {
        if (value) {
          return false
        }
        if (!document?.title) {
          return true
        }
        const title = document?.title as string
        return title.toLowerCase() !== 'news'
      },
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
          title: 'Hero',
        }),
        defineArrayMember({
          name: 'highlightedNews',
          type: 'highlightedNews',
          title: 'Highlighted News',
        }),
        defineArrayMember({
          name: 'newsNavigator',
          type: 'newsNavigator',
          title: 'News Navigator',
        }),
      ],
    }),
  ],
  __experimental_omnisearch_visibility: false,
})
