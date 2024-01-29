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
      title: 'Skewed Background',
      name: 'skewedBackground',
      type: 'boolean',
    }),
    defineField({
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'color',
    }),
    defineField({
      title: 'Card Background Color',
      name: 'cardBgColor',
      type: 'color',
    }),
    defineField({
      title: 'Card Text Color',
      name: 'cardTextColor',
      type: 'color',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      title: 'Cards',
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
