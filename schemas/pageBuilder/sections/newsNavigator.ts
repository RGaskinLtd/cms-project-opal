import {defineField, defineType} from 'sanity'
import {BsFillGrid3X2GapFill} from 'react-icons/bs'

export const newsNavigator = defineType({
  name: 'newsNavigator',
  type: 'object',
  title: 'News Navigator',
  icon: BsFillGrid3X2GapFill,
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
        title: title ?? 'News Navigator',
      }
    },
  }
})
