import {BsLayoutThreeColumns} from 'react-icons/bs'
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
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'light'
    }),
    defineField({
      title: 'Card Template',
      name: 'cardTemplate',
      type: 'string',
      options: {
        list: [
          {title: 'Short Article', value: 'shortArticle'},
          {title: 'Summary', value: 'summary'}
        ]
      },
      initialValue: 'shortArticle'
    }),
    defineField({
      title: 'Skewed Background',
      name: 'skewedBackground',
      type: 'boolean',
      initialValue: true,
      hidden: ({parent}) => parent?.cardTemplate === 'summary'
    }),
    defineField({
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'string',
      options: {
        list: [
          {title: 'yellow gradient', value: 'linear-gradient(171.07deg,rgb(217,186,139) 10.32%,rgb(248,244,223) 107.81%)'},
          {title: 'green gradient', value: 'linear-gradient(8.86deg,rgb(193,252,211) -33.7%,rgb(12,205,163) 63.07%)'},
        ]
      },
      hidden: ({parent}) => !parent?.skewedBackground
    }),
    defineField({
      name: 'headerContent',
      type: 'basicBlockContent',
      title: 'Header Content'
    }),
    defineField({
      title: 'Cards',
      name: 'cardsShortArticle',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'card',
          type: 'cardShortArticle',
        }),
      ],
      validation: (Rule) => Rule.min(3).max(9),
      hidden: ({parent}) => parent?.cardTemplate === 'summary'
    }),
    defineField({
      title: 'Cards',
      name: 'cardsSummary',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'card',
          type: 'cardSummary',
        }),
      ],
      validation: (Rule) => Rule.min(3).max(9),
      hidden: ({parent}) => parent?.cardTemplate === 'shortArticle'
    })
  ],
})
