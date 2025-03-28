import { link } from '@/fields/link'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const MCButtonBlock: Block = {
  slug: 'mCButtonBlock',
  interfaceName: 'MCButtonBlock',
  fields: [
    {
      name: 'list',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'media', type: 'upload', relationTo: 'media', required: true },
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
            {
              name: 'align',
              type: 'select',
              options: [
                { label: 'Media-Content', value: 'media-content' },
                { label: 'Content-Media', value: 'content-media' },
                { label: 'Horizontal M-C', value: 'horizontal-media-content' },
                { label: 'Horizontal C-M', value: 'horizontal-content-media' },
              ],
              defaultValue: 'media-content',
              required: true,
            },
          ],
        },
        link({ appearances: false }),
      ],
    },
  ],
}
