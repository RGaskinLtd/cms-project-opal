import {defineField, defineType} from 'sanity'
import {BsNewspaper} from 'react-icons/bs'

export const latestNews = defineType({
  name: 'latestNews',
  type: 'object',
  title: 'Latest News',
  icon: BsNewspaper,
  fields: [
    defineField({
      name: 'theme',
      type: 'theme',
    }),
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
        title: title ?? 'Latest News',
      }
    },
  }
})
