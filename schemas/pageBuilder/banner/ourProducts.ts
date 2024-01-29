import {defineField, defineType} from 'sanity'
import {FaProductHunt} from 'react-icons/fa'
export const ourProducts = defineType({
  name: 'ourProducts',
  type: 'object',
  title: 'Our Products',
  icon: FaProductHunt,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [
        defineField({
          name: 'product',
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Image',
              name: 'image',
              type: 'image',
            }),
          ],
          preview: {
            select: {
              media: 'image',
              title: 'name'
            }
          }
        })
      ],
    }),
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'dark'
    }),
  ],
  preview: {
    select: {
      name: 'title',
    },
    prepare(selection) {
      return {
        title: selection.name ?? 'Our Products',
      }
    },
  }
})
