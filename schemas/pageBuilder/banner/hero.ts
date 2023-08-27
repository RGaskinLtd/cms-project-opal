// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'

export const heroBanner = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
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
      name: 'image',
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
  ],
})
