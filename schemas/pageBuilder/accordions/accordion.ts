import {defineField, defineType} from 'sanity'
import {TfiLayoutAccordionSeparated as icon} from 'react-icons/tfi'

export const accordion = defineType({
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  icon: icon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'summary',
      type: 'string',
      title: 'Summary',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'basicBlockContent',
    }),
    defineField({
      title: 'CTA',
      name: 'cta',
      type: 'cta',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      summary: 'summary'
    },
    prepare(selection) {
      const {title, summary} = selection

      let previewValue
      if (title && summary) {
        previewValue = `${title}: ${summary}`
      }
      if (title && !summary) {
        previewValue = title
      }
      if (!title && summary) {
        previewValue = summary
      }
      if (!title && !summary) {
        previewValue = 'Empty Accordion'
      }
      return {title: previewValue}
    }
  }
})
