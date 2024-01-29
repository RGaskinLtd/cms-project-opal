import {defineField, defineType} from 'sanity'
import {BsLayoutSplit as icon} from 'react-icons/bs'

export const splitContent = defineType({
  name: 'splitContent',
  type: 'object',
  title: 'Split Content',
  icon,
  fields: [
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'dark'
    }),
    defineField({
      title: 'Invert',
      name: 'invert',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          title: 'Alt Text',
          name: 'alt',
          type: 'string'
        })
      ]
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'basicBlockContent'
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Split Content',
      }
    },
  }
})
