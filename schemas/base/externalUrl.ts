import {defineType} from 'sanity'
import {IoIosLink as icon} from 'react-icons/io'

export const externalUrl = defineType({
  name: 'externalUrl',
  title: 'url to external site',
  icon,
  type: 'url',
  validation: (Rule) => Rule.uri({
    scheme: ['http', 'https', 'mailto', 'tel']
  })
})
