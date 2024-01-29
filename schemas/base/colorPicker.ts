import {defineType} from 'sanity'

export const colorPicker = defineType({
  name: 'colorPicker',
  title: 'Background Color with Custom Values',
  type: 'simplerColor',
  options: {
    colorList: [
      {label: 'White', value: '#ffffff'},
      {label: 'Light Gray', value: '#c2ccda'},

      {label: 'Default Text', value: '#F7EEE2'},
      {label: 'Dark Text', value: '#32302F'},
      {label: 'Default Background', value: '#252525'},
      {label: 'Secondary Background', value: '#f5f5f5'},
      {label: 'Footer Background', value: '#1b1717'},

      {label: 'Green', value: '#0CCDA3'},
      {label: 'Black', value: '#000000'},
      {label: 'Transparent', value: '#00000000'},
    ],
  }
})
