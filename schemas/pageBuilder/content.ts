import {defineField, defineType} from 'sanity'
import {AiOutlineFileText} from 'react-icons/ai'

export const content = defineType({
  name: 'content',
  type: 'object',
  title: 'Rich Text Content',
  icon: AiOutlineFileText,
  fields: [
    defineField({
      name: 'readable',
      type: 'readable',
      initialValue: true
    }),
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'dark'
    }),
    defineField({
      name: 'mainContent',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Rich Text Content',
      }
    },
  }
})
