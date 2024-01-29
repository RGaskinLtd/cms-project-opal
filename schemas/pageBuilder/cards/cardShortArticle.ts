import {defineField, defineType} from 'sanity'

export const cardShortArticle = defineType({
  name: 'cardShortArticle',
  type: 'object',
  title: 'Card Short Article',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(24),
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
    defineField({
      name: 'cta',
      type: 'cta',
    }),
  ],
})
