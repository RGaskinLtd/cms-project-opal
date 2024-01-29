import {defineField, defineType} from 'sanity'
import {PiMapTrifold} from 'react-icons/pi'

export const issuersMap = defineType({
  name: 'issuersMap',
  type: 'object',
  title: 'Issuers Map',
  icon: PiMapTrifold,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'content.title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title ?? 'Issuers Map',
      }
    },
  }
})
