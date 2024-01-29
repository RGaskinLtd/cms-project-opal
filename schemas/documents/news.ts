import {defineField, defineType} from 'sanity'
import {FcNews as icon} from 'react-icons/fc'

export const news = defineType({
  name: 'newsPage',
  type: 'document',
  title: 'News',
  icon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'summary', type: 'basicBlockContent'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `/news/${doc.title}`,
        slugify: (input) => input
          .toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll('.', '')
          .slice(0, 200)
      }
    }),
    defineField({
      name: 'publishedDate',
      type: 'datetime',
      hidden: () => true
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: [{type: 'newsTag'}]
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Main Image'
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'blockContent'
    }),
  ],
  orderings: [
    {
      title: 'Release Date',
      name: 'releaseDateDesc',
      by: [{field: '_createdAt', direction: 'desc'}]
    }
  ]
})
