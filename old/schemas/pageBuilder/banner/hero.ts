// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'
import { BiRectangle } from 'react-icons/bi'
export const heroBanner = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: BiRectangle,
  fields: [
    defineField({
      title: 'Heading',
      name: 'headingObj',
      type: 'object',
      fields: [
        defineField({
          title: 'Heading',
          name: 'heading',
          type: 'string',
        }),
        defineField({
          title: 'Green Overline',
          name: 'greenOverline',
          type: 'boolean',
        }),
      ]
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      title: 'Background Color',
      name: 'bgColor',
      type: 'color',
    }),
    defineField({
      title: 'Text Color',
      name: 'textColor',
      type: 'color',
    }),
    defineField({
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      title: 'Hero Banner Image',
      name: 'heroImage',
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
    select: {
      title: 'headingObj.heading',
    },
    prepare(selection) {
      const {title } = selection
      return {
        title,
      }
    },
  }
})
