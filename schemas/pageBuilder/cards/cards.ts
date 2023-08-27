import { BsLayoutThreeColumns } from "react-icons/bs";
import {defineArrayMember, defineField, defineType} from 'sanity'

export const cards = defineType({
  name: 'cards',
  type: 'object',
  title: 'Cards',
  icon: BsLayoutThreeColumns,
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title ?? 'Cards',
      }
    }
  },
  fields: [
    defineField({
      name: 'skewedBackground',
      type: 'boolean',
    }),
    defineField({
      name: 'backgroundColor',
      type: 'color',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'title'
    }),
    defineField({
      name: 'cards',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'card',
          type: 'card',
        }),
      ],
      validation: Rule => Rule.min(3).max(9)
    })
  ],
})
