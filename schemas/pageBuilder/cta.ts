// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'
import { BiMouse } from 'react-icons/bi'

export const cta = defineType({
  name: 'cta',
  type: 'object',
  title: 'cta',
  icon: BiMouse,
  fields: [
    defineField({
      title: 'Call To Action',
      name: 'ctaObj',
      type: 'object',
      fields: [
        defineField({
          title: 'Text',
          name: 'text',
          type: 'string',
        }),
        defineField({
          name: 'link',
          type: 'reference',
          title: 'Internal Link',
          to: [
            { type: 'page' }
          ]
        }),
        defineField({
          title: 'Button Background Color',
          name: 'btnBgColor',
          type: 'color',
        }),
        defineField({
          title: 'Button Text Color',
          name: 'btnTextColor',
          type: 'color',
        }),
      ]
    }),
    defineField({
      title: 'Align',
      name: 'align',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      title: 'Background Color',
      name: 'bgColor',
      type: 'color',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Call To Action' }
    }
  }
})
