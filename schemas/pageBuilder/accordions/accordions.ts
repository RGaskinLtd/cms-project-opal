import {defineField, defineType} from 'sanity'
import {TfiLayoutAccordionList as icon} from 'react-icons/tfi'
import {blocksToText} from '../../../utils/helpers'

export const accordions = defineType({
  name: 'accordions',
  type: 'object',
  title: 'Accordions',
  icon: icon,
  fields: [
    defineField({
      name: 'readable',
      type: 'readable',
      initialValue: false
    }),
    defineField({
      name: 'title',
      type: 'basicBlockContent',
      title: 'Title',
    }),
    defineField({
      name: 'theme',
      type: 'theme',
      title: 'Theme',
    }),
    defineField({
      name: 'displayCount',
      type: 'boolean',
      title: 'Display Count',
      initialValue: false
    }),
    defineField({
      name: 'accordionsGroup',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'basicBlockContent'
        }),
        defineField({
          name: 'accordions',
          type: 'array',
          of: [{type: 'accordion'}]
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {title: title ? `${blocksToText(title)}` : 'Accordions'}
    }
  }
})
