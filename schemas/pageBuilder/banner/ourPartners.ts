import {defineField, defineType} from 'sanity'
import {MdCardMembership as icon} from 'react-icons/md'
export const ourPartners = defineType({
  name: 'ourPartners',
  type: 'object',
  title: 'Our Partners',
  icon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Partners',
      name: 'partners',
      type: 'array',
      of: [
        defineField({
          name: 'partner',
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Image',
              name: 'image',
              type: 'image',
            }),
          ],
          preview: {
            select: {
              media: 'image',
              title: 'name'
            }
          }
        })
      ],
    }),
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'dark'
    }),
  ],
  preview: {
    select: {
      name: 'title',
    },
    prepare(selection) {
      return {
        title: selection.name ?? 'Our Partners',
      }
    },
  }
})
