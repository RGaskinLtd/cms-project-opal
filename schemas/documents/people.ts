import {defineArrayMember, defineField, defineType} from 'sanity'
import {SlPeople as icon} from 'react-icons/sl'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const hiddenResuableSections = ['productsNav']

export const people = defineType({
  name: 'people',
  type: 'document',
  title: 'People',
  icon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'people'}),
    defineField({name: 'name', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `/team/${doc.name}`,
        slugify: (input) => input
          .toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll('.', '')
          .slice(0, 200)
      }
    }),
    defineField({name: 'position', type: 'string'}),
    defineField({name: 'summary', type: 'basicBlockContent'}),
    defineField({name: 'image', type: 'image'}),
    defineField({name: 'linkedin', type: 'string', validation: (rule) => rule.custom((url) => {
      if (typeof url === 'undefined') {
        return true // Allow undefined values, remove if the field is required
      }
      if (!url) {
        return 'Not a valid linkedin url'
      }
      // eslint-disable-next-line max-len
      const regex = /^http[s]?:\/\/www\.linkedin\.com\/(in|pub|public-profile\/in|public-profile\/pub)\/.{1,}/gm // Regex pattern goes here
      if (regex.test(url)) {
        return true
      }
      return 'Not a valid linkedin url' // Error message goes here

    })}),
    defineField({name: 'content', type: 'blockContent'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
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
          name: 'splitContent',
          type: 'splitContent',
          title: 'Split Content',
        }),
        defineArrayMember({
          name: 'ourPeople',
          type: 'ourPeople',
          title: 'Our People',
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
  ],
})
