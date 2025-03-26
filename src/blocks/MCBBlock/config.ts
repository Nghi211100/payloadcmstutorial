import { link } from '@/fields/link'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const MCBBlock: Block = {
  slug: 'mCBBlock',
  interfaceName: 'MCBBlock',
  fields: [
    {
      name: 'MCB',
      type: 'group',
      fields: [
        { name: 'media', type: 'upload', relationTo: 'media', required: true },
        {
          name: 'item',
          type: 'group',

          fields: [
            {
              name: 'content',
              type: 'richText',
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ]
                },
              }),
            },
            link({ appearances: false }),
          ],
        },
        {
          name: 'align',
          type: 'select',
          options: [
            { label: 'Media-Content', value: 'media-content' },
            { label: 'Content-Media', value: 'content-media' },
          ],
          defaultValue: 'media-content',
          required: true,
        },
      ],
    },
  ],
}
