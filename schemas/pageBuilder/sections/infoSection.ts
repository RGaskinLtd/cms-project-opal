// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'
import {SectionIcon} from '@radix-ui/react-icons'
import {blocksToText} from '../../../utils/helpers'

export const infoSection = defineType({
  name: 'infoSection',
  type: 'object',
  title: 'Info Section',
  icon: SectionIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'basicBlockContent',
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
  ],
  preview: {
    select: {
      title: 'content',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: blocksToText(title),
      }
    },
  }
})
