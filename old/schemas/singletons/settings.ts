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
      title: 'Footer Info',
      type: 'object',
      fields: [
        defineField({
          title: 'Background Color',
          name: 'bgColor',
          type: 'color',
        }),
        defineField({
          title: 'Text Color',
          name: 'textColor',
          type: 'color',
        }),
        defineField({
          title: 'Social Links',
          name: 'socialLinks',
          type: 'object',
          fields: [
            defineField({
              title: 'LinkedIn',
              name: 'linkedin',
              type: 'url',
              validation: (Rule) => Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
            }),
            defineField({
              title: 'Github',
              name: 'github',
              type: 'url',
              validation: (Rule) => Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
            }),
            defineField({
              title: 'Facebook',
              name: 'facebook',
              type: 'url',
              validation: (Rule) => Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
            }),
          ]
        }),
        defineField({
          title: 'Copyright Text',
          name: 'copyright',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'SEOSettings',
      title: 'SEO Meta Tags',
      type: 'object',
      fields: [
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Displayed on social cards and search engine results.',
          options: {
            hotspot: true,
          },
        }),
      ]
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
