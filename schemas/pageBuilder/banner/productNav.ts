import {defineField, defineType} from 'sanity'
import {FaProductHunt} from 'react-icons/fa'
export const productsNav = defineType({
  name: 'productsNav',
  type: 'object',
  title: 'Product Navigation',
  icon: FaProductHunt,
  fields: [
    defineField({
      title: 'Navigate Products',
      name: 'navigateProducts',
      type: 'object',
      fields: [
        defineField({
          title: 'Background Image',
          name: 'bgImage',
          type: 'image',
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
                  name: 'link',
                  type: 'reference',
                  title: 'Internal Link',
                  to: [{type: 'page'}]
                }),
                defineField({
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                }),
              ],
              preview: {
                select: {
                  title: 'name'
                }
              }
            })
          ],
        })
      ]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Products Navigation',
      }
    },
  }
})
