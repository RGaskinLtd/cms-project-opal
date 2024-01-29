import {HiOutlineCog} from 'react-icons/hi'
import {defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: HiOutlineCog,
  groups: [
    {
      name: 'navbar',
      title: 'Navbar',
      default: true
    },
    {
      name: 'footer',
      title: 'Footer',
      default: false
    },
    {
      name: 'copyright',
      title: 'Copyright',
      default: false
    },
    {
      name: 'seo',
      title: 'SEO',
      default: false
    },
  ],
  fields: [
    defineField({
      title: 'Navigation Settings',
      name: 'navSettings',
      type: 'object',
      group: 'navbar',
      fields: [
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
                {type: 'pageGroups'}
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
      group: 'footer',
      fields: [
        // Information
        defineField({
          title: 'Information Content',
          name: 'infoContent',
          type: 'basicBlockContent',
        }),
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'object',
          fields: [
            defineField({
              title: 'LinkedIn',
              name: 'linkedIn',
              type: 'url',
              validation: (Rule) => Rule.uri({
                scheme: ['http', 'https']
              })
            }),
            defineField({
              title: 'Twitter',
              name: 'twitter',
              type: 'url',
              validation: (Rule) => Rule.uri({
                scheme: ['http', 'https']
              })
            })
          ]
        }),


        // Navigation
        defineField({
          name: 'navItems',
          title: 'Navigation Items',
          description: 'Links displayed in the Navigation section of the footer on your site.',
          type: 'array',
          of: [
            {
              title: 'Reference',
              type: 'reference',
              to: [{type: 'page'}],
            },
          ],
        }),

        // Contact Us
        defineField({
          title: 'Contact Us',
          name: 'contactUs',
          type: 'object',
          fields: [
            defineField({
              title: 'Address',
              name: 'address',
              type: 'basicBlockContent',
            }),
            defineField({
              title: 'Email',
              name: 'email',
              type: 'email',
            }),
          ]
        }),

        // Logo / Back To Top action
        defineField({
          title: 'Logo',
          name: 'logo',
          type: 'image',
        }),
        defineField({
          title: 'Back To Top Action',
          name: 'backToTop',
          type: 'boolean',
          initialValue: true
        }),

      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Info',
      type: 'object',
      group: 'copyright',
      fields: [
        defineField({
          title: 'Logo',
          name: 'logo',
          type: 'image',
        }),
        defineField({
          name: 'legalItems',
          title: 'Legal Items',
          description: 'Legal info links displayed in very bottom right of the site along side copyright',
          type: 'array',
          of: [
            {
              title: 'Reference',
              type: 'reference',
              to: [{type: 'page'}],
            },
          ],
        }),
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
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
    })
  ],
  __experimental_omnisearch_visibility: false,
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
