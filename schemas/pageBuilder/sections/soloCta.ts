import {defineField, defineType} from 'sanity'
import {BiMouse} from 'react-icons/bi'

export const soloCta = defineType({
  name: 'soloCta',
  type: 'object',
  title: 'Solo CTA',
  icon: BiMouse,
  fields: [
    defineField({
      name: 'readable',
      type: 'readable',
      initialValue: false
    }),
    defineField({
      name: 'theme',
      type: 'theme',
      title: 'Theme',
    }),
    defineField({
      title: 'Content Above CTA',
      name: 'ctaContent',
      type: 'basicBlockContent',
    }),
    defineField({
      name: 'position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ]
      },
      initialValue: 'center'
    }),
    defineField({
      title: 'Call to Action',
      name: 'cta',
      type: 'cta',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Solo CTA',
      }
    },
  }
})
