import {defineField, defineType} from 'sanity'
import {PiNewspaperClippingThin} from 'react-icons/pi'

export const highlightedNews = defineType({
  name: 'highlightedNews',
  type: 'object',
  title: 'Highlighted News',
  icon: PiNewspaperClippingThin,
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
        title: title ?? 'Highlighted News',
      }
    },
  }
})
