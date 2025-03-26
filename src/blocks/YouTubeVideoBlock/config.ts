import { Block } from 'payload'

const YouTubeVideoBlock: Block = {
  slug: 'youtubeVideoBlock',
  interfaceName: 'YoutubeVideoBlock',
  labels: {
    singular: 'Youtube Video',
    plural: 'Youtube Video',
  },
  fields: [
    {
      name: 'youtubeUrl',
      type: 'text',
      label: 'Youtube URL',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Video Title',
      required: false,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Video Description',
      required: false,
    },
  ],
}

export default YouTubeVideoBlock
