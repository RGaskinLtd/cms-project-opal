import {defineArrayMember, defineField, defineType} from 'sanity'
import {ImStatsBars as icon} from 'react-icons/im'

export const stats = defineType({
  name: 'stats',
  type: 'object',
  title: 'Stats',
  icon,
  fields: [
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'dark'
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Stats',
      name: 'stats',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'stat',
          type: 'stat',
        }),
      ],
      // can have a minimum of 3 and a maxium of 3 stats displayed (won't allow publish until requirements met)
      validation: (Rule) => Rule.min(3).max(3)
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title ? `${title} Stats` : 'Stats',
      }
    },
  }
})
