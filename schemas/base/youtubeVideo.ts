import {defineType, defineField} from 'sanity'
import {YouTubePreview} from '../../components/youtubeVideoViewer'

export const youtube = defineType({
  name: 'youtube',
  title: 'Youtube',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    preview: YouTubePreview,
  },
})
