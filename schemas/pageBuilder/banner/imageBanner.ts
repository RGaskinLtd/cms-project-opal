import {defineField, defineType} from 'sanity'
import {LiaImage as icon} from 'react-icons/lia'
export const imageBanner = defineType({
  name: 'imageBanner',
  type: 'object',
  title: 'Image Banner',
  icon,
  fields: [
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Image Banner'
      }
    }
  }
})
