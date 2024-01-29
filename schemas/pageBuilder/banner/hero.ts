import {defineField, defineType} from 'sanity'
import {BiRectangle} from 'react-icons/bi'
export const heroBanner = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: BiRectangle,
  fields: [
    defineField({
      name: 'readable',
      type: 'readable',
      initialValue: false
    }),
    defineField({
      name: 'theme',
      type: 'theme',
      title: 'Theme',
      initialValue: 'dark'
    }),
    defineField({
      name: 'template',
      type: 'string',
      title: 'Template',
      options: {
        list: [
          { title: 'Full Screen', value: 'full' },
          { title: 'Normal', value: 'normal' },
        ]
      },
      initialValue: 'dark'
    }),
    defineField({
      title: 'Spacing',
      name: 'spacing',
      type: 'string',
      options: {
        list: [
          {title: 'none', value: 'none'},
          {title: 'small', value: 'sm'},
          {title: 'medium', value: 'md'},
          {title: 'large', value: 'lg'},
          {title: 'extra large', value: 'xl'},
        ]
      },
      initialValue: 'none'
    }),
    defineField({
      title: 'Text Content Max Width',
      name: 'maxWidth',
      type: 'string',
      options: {
        list: [
          {title: '6/12', value: '6/12'},
          {title: '7/12', value: '7/12'},
          {title: '8/12', value: '8/12'},
          {title: '9/12', value: '9/12'},
          {title: '10/12', value: '10/12'},
          {title: '11/12', value: '11/12'},
          {title: 'full', value: 'full'},
        ]
      }
    }),
    defineField({
      title: 'Eye Brow',
      name: 'eyebrow',
      type: 'string',
    }),
    defineField({
      title: 'Main Content',
      name: 'mainContent',
      type: 'basicBlockContent',
    }),
    defineField({
      title: 'CTA\'s',
      name: 'ctas',
      type: 'array',
      of: [{type: 'cta'}]
    }),
    defineField({
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
      options: {hotspot: true},
    }),

    // Content to the Right
    defineField({
      name: 'productsNavigation',
      type: 'reference',
      title: 'Products Navigation',
      to: [{type: 'section'}],
      options: {
        filter: 'content[0]._type == "productsNav"',
      },
      hidden: ({parent}) => !!parent?.heroImage || !!parent?.threeDModel
    }),
    defineField({
      name: 'threeDModel',
      title: '3D Model',
      type: 'boolean',
      initialValue: true,
      hidden: ({parent}) => !!parent?.productsNavigation || !!parent?.heroImage
    }),
    defineField({
      title: 'Hero Banner Image',
      name: 'heroImage',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
      hidden: ({parent}) => !!parent?.productsNavigation || !!parent?.threeDModel
    })
  ],
  preview: {
    select: {
      title: 'eyebrow',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `Hero${title ? ':' : ''} ${title ?? ''}`,
      }
    },
  }
})
