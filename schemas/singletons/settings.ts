import { HiOutlineCog } from 'react-icons/hi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: HiOutlineCog,
  fields: [
    defineField({
      title: 'Navigation Settings',
      name: 'navSettings',
      type: 'object',
      fields: [
        defineField({
          title: 'Primary Nav Color',
          name: 'defaultBgColor',
          type: 'color',
        }),
        defineField({
          title: 'Secondary Nav Color',
          name: 'secondaryBgColor',
          type: 'color',
        }),
        defineField({
          title: 'Logo',
          name: 'logoObj',
          type: 'object',
          fields: [
            defineField({
              title: 'Logo',
              name: 'logo',
              type: 'image',
            }),
            defineField({
              title: 'link',
              name: 'link',
              type: 'reference',
              to: {type: 'page'}
            })
          ]
        }),
        defineField({
          name: 'menuItems',
          title: 'Menu Item list',
          description: 'Links displayed on the header of your site.',
          type: 'array',
          of: [
            {
              title: 'Reference',
              type: 'reference',
              to: [
                {
                  type: 'page',
                },
                { type: 'pageGroups' }
              ],
            },
          ],
        }),
        defineField({
          title: 'Contact Us Button',
          name: 'contactUsObj',
          type: 'object',
          fields: [
            defineField({
              title: 'Enable Contact Us Button',
              name: 'enabled',
              type: 'boolean'
            }),
            defineField({
              title: 'Contact Us Text',
              name: 'text',
              type: 'string'
            }),
            defineField({
              title: 'Contact Us Page',
              name: 'link',
              type: 'reference',
              to: {type: 'page'}
            })
          ]
        }),
      ]
    }),
    defineField({
      name: 'footer',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
