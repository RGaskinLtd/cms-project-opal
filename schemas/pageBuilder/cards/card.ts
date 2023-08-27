// ./schemas/heroType.ts

import {defineField, defineType} from 'sanity'

export const card = defineType({
  name: 'card',
  type: 'object',
  title: 'Card',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(30),
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(60)
    }),
    defineField({
      name: 'content',
      type: 'string',
      validation: Rule => Rule.required().min(1).max(400)
    }),
    defineField({
      name: 'cta',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          type: 'string',
          title: 'CTA Text',
          validation: Rule => Rule.required().min(1).max(30)
        }),
        defineField({
          title: 'Link',
          name: 'href',
          type: 'url',
          validation: Rule => Rule.required().uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
        }),
      ],
    }),
  ],
})
