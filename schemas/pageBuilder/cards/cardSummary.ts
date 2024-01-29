import {defineField, defineType} from 'sanity'

export const cardSummary = defineType({
  name: 'cardSummary',
  type: 'object',
  title: 'Card Summary',
  fields: [
    defineField({
      name: 'icon',
      type: 'image',
    }),
    defineField({
      title: 'Icon Background',
      name: 'iconBg',
      type: 'colorPicker',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: 'content',
      type: 'basicBlockContent',
      validation: (Rule) => Rule.required().min(1)
    }),
  ],
})
