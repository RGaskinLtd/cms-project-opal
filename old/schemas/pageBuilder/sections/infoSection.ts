// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'
import { SectionIcon } from '@radix-ui/react-icons';

export const infoSection = defineType({
  name: 'infoSection',
  type: 'object',
  title: 'Info Section',
  icon: SectionIcon,
  fields: [
    defineField({
      title: 'Content',
      name: 'content',
      type: 'object',
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
          type: 'blockContent',
        }),

        defineField({
          title: 'Reverse Direction',
          name: 'reverseDirection',
          type: 'boolean',
        }),

        defineField({
          title: 'Info Section Image',
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
      ]
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
  ],
  preview: {
    select: {
      title: 'content.headingObj.heading',
    },
    prepare(selection) {
      const {title } = selection
      return {
        title,
      }
    },
  }
})
