import {defineField, defineType} from 'sanity'
import {BiMouse} from 'react-icons/bi'

function isLinkTypeHidden({parent, linkType}: { parent: {linkType: string}, linkType: 'internal' | 'external' | 'file' }) {
  const linkTypes = ['internal', 'external', 'file']
  const hideWhenLinkTypesAre = linkTypes.filter((item) => item !== linkType)
  return !parent?.linkType || (hideWhenLinkTypesAre.includes(parent?.linkType))
}

export const cta = defineType({
  name: 'cta',
  type: 'object',
  title: 'cta',
  icon: BiMouse,
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'CTA Text',
    }),
    defineField({
      name: 'style',
      type: 'string',
      title: 'CTA Style',
      options: {
        list: [
          {title: 'Arrow', value: 'arrow'},
          {title: 'PO', value: 'po'},
        ]
      }
    }),
    defineField({
      title: 'CTA Color',
      name: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Green', value: 'green'},
          {title: 'Opal', value: 'opal'},
          {title: 'Solid Opal', value: 'solid-opal'},
        ],
      },
      initialValue: 'opal'
    }),
    defineField({
      title: 'Link Type',
      name: 'linkType',
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
          {title: 'File', value: 'file'},
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'internal',
      type: 'reference',
      title: 'Internal Link',
      to: [{type: 'page'},],
      hidden: ({parent}) => isLinkTypeHidden({parent, linkType: 'internal'})
    }),
    defineField({
      title: 'File Link',
      name: 'file',
      type: 'file',
      hidden: ({parent}) => isLinkTypeHidden({parent, linkType: 'file'})
    }),
    defineField({
      title: 'External Link',
      name: 'external',
      type: 'externalUrl',
      hidden: ({parent}) => isLinkTypeHidden({parent, linkType: 'external'})
    }),
  ],
  preview: {
    select: {
      title: 'text',
    },
    prepare(selection) {
      const {title} = selection
      return {title: title ? `CTA: ${title}` : 'Call To Action'}
    }
  }
})
