import {defineField, defineType} from 'sanity'
import {PiBroadcastBold} from 'react-icons/pi'

export const section = defineType({
  title: 'Reusable Section',
  name: 'section',
  type: 'document',
  icon: PiBroadcastBold,
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Provide a name to reference this section. For internal use only.',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'cards'},
        {type: 'infoSection'},
        {type: 'splitContent'},
        {type: 'soloCta'},
        {type: 'latestNews'},
        {
          title: 'Reusable Section',
          type: 'reference',
          to: [{type: 'section'}],
        },
        {type: 'ourPeople'},
      ],
      validation: (Rule) => Rule.length(1).error('You can only have one piece of content')
    })
  ],
  __experimental_omnisearch_visibility: false,
  preview: {
    select: {
      title: 'name',
      subtitle: 'content.0'
    },
  }
})
