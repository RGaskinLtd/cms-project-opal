import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsTag',
  title: 'News Tag',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
  __experimental_omnisearch_visibility: false,
})
