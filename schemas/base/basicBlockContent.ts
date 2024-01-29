import {defineArrayMember, defineType} from 'sanity'
import {BlockStyledText} from '../../components/blockStyledText'
import {HiDocumentSearch} from 'react-icons/hi'

export const basicBlockContent = defineType({
  title: 'Basic Block Content',
  name: 'basicBlockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal', component: BlockStyledText},
        {title: 'Smaller', value: 'smaller', component: BlockStyledText},
        {title: 'Smallest', value: 'smallest', component: BlockStyledText},
        {title: 'Larger', value: 'larger', component: BlockStyledText},
        {title: 'Sub Title', value: 'subtitle', component: BlockStyledText},
        {title: 'Eye Brow', value: 'eye_brow', component: BlockStyledText},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'externalUrl',
                title: 'URL'
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: HiDocumentSearch,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'page'},
                  {type: 'newsPage'},
                ]
              }
            ]
          }
        ],
      },
    }),
  ],
})
