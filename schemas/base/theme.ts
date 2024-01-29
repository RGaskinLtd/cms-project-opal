import {defineType} from 'sanity'

export const theme = defineType({
  name: 'theme',
  type: 'string',
  title: 'Theme',
  options: {
    list: [
      {title: 'Light', value: 'light'},
      {title: 'Dark', value: 'dark'},
      {title: 'White Text', value: 'white text'},
    ]
  },
  initialValue: 'light'
})
