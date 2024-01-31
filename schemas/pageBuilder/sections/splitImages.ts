import {defineField, defineType} from 'sanity'
import {LuSplitSquareHorizontal} from 'react-icons/lu'
export const splitImages = defineType({
  name: 'splitImages',
  type: 'object',
  title: 'Split Images',
  icon: LuSplitSquareHorizontal,
  fields: [
    defineField({
      name: 'theme',
      type: 'theme',
    }),
    defineField({
      name: 'images',
      type: 'array',
      validation: (Rule) => Rule.min(2).max(3),
      of: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
          fields: [
            // defineField({
            //   name: 'content',
            //   title: 'Content',
            //   type: 'basicBlockContent',
            // }),
            defineField({
              name: 'cta',
              title: 'Call to Action',
              type: 'cta',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Split Images',
      }
    },
  }
})
