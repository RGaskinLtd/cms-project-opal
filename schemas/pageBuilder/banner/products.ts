import {defineField, defineType} from 'sanity'
import {BiRectangle} from 'react-icons/bi'
export const productHighlightBanner = defineType({
  name: 'productHighlightBanner',
  type: 'object',
  title: 'Product Highlight Banner',
  icon: BiRectangle,
  fields: [
    defineField({
      title: 'Product Highlight',
      name: 'productHighlight',
      type: 'object',
      fields: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
        }),
        defineField({
          title: 'Video',
          name: 'video',
          type: 'file',
        }),
      ]
    }),
    defineField({
      name: 'productsNavigation',
      type: 'reference',
      title: 'Products Navigation',
      to: [{type: 'section'}],
      options: {
        filter: 'content[0]._type == "productsNav"',
      }
    }),
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'dark'
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Highlight',
      }
    },
  }
})
