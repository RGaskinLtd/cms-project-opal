import {defineField, defineType} from 'sanity'
import {ImStatsBars as icon} from 'react-icons/im'

export const stat = defineType({
  name: 'stat',
  type: 'object',
  title: 'Stat',
  icon,
  fields: [
    defineField({
      title: 'Value',
      name: 'value',
      type: 'number',
    }),
    defineField({
      title: 'Unit',
      name: 'unit',
      type: 'string',
    }),
    defineField({
      title: 'Stat Info',
      name: 'info',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      value: 'value',
      unit: 'unit',
      info: 'info',
    },
    prepare(selection) {
      const {value, unit, info} = selection
      if (value && unit && info) {
        return {title: `${value} ${unit}: ${info}`}
      }
      if (value && unit) {
        return {title: `${value} ${unit}`}
      }
      return {
        title: `${value}`
      }
    },
  }
})
