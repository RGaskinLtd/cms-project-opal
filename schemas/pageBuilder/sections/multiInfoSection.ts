import {defineField, defineType} from 'sanity'
import {SectionIcon} from '@radix-ui/react-icons'
export const multiInfoSection = defineType({
  name: 'multiInfoSection',
  type: 'object',
  title: 'Multi Info Section',
  icon: SectionIcon,
  fields: [
    defineField({
      title: 'Info Section Image',
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'infoItems',
      type: 'accordions',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Multi Info Section',
      }
    },
  }
})
