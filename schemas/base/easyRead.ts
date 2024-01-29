import {defineType} from 'sanity'

export const easyRead = defineType({
  title: 'Easy Read',
  description: 'reduces the width of the container the text is within',
  name: 'readable',
  type: 'boolean',
  initialValue: false
})
