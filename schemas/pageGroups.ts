import {defineArrayMember, defineField, defineType} from 'sanity'
import {MdLocalPlay as icon} from 'react-icons/md'

export default defineType({
  name: 'pageGroups',
  title: 'Page Group',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Group',
      type: 'string',
      description: 'page grouping for the navbar',
    }),
    defineField({
      name: 'group',
      title: 'group',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Page',
          name: 'page',
          type: 'reference',
          to: [{type: 'page'}],
        })
      ]
    }),
  ],
  preview: {
    select: {
      title: 'groupName',
    },
  },
})
