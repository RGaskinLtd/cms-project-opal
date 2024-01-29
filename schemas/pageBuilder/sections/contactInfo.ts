import {defineField, defineType} from 'sanity'
import {RiContactsLine as icon} from 'react-icons/ri'
export const contactInfo = defineType({
  name: 'contactInfo',
  type: 'object',
  title: 'Contact Info',
  icon,
  fields: [
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'light'
    }),
    defineField({
      title: 'Header',
      name: 'header',
      type: 'basicBlockContent',
    }),
    defineField({
      title: 'Info Block 1',
      name: 'infoBlockOne',
      type: 'basicBlockContent',
    }),
    defineField({
      title: 'Info Block 2',
      name: 'infoBlockTwo',
      type: 'basicBlockContent',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Us',
      }
    },
  }
})
