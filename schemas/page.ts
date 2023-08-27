import {defineArrayMember, defineField, defineType} from 'sanity'
import {FcDocument as icon} from 'react-icons/fc'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Pages',
  icon,
  fields: [
    defineField({name: 'title', type: 'string'}),
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
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
          title: 'Hero',
        }),
        defineArrayMember({
          name: 'cards',
          type: 'cards',
          title: 'Cards'
        }),
        // etc...
      ],
    }),
  ],
})
