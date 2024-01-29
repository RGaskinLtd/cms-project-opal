import {defineField, defineType} from 'sanity'
import {SlPeople as icon} from 'react-icons/sl'
export const ourPeople = defineType({
  name: 'ourPeople',
  type: 'object',
  title: 'Our People',
  icon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Our Team'
    }),
    defineField({
      title: 'slider',
      name: 'slider',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      title: 'Theme',
      name: 'theme',
      type: 'theme',
      initialValue: 'light'
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Our People',
      }
    },
  }
})
