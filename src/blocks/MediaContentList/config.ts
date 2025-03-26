import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const MediaContentListBlock: Block = {
  slug: 'mCListBlock',
  interfaceName: 'MCListBlock',
  fields: [
    {
      name: 'list',
      type: 'group',
      fields: [
        {
          name: 'title',
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
          name: 'gridCols',
          type: 'select',
          options: [
            { label: '2 Columns', value: 'cols-2' },
            { label: '3 Columns', value: 'cols-3' },
            { label: '4 Columns', value: 'cols-4' },
          ],
          defaultValue: 'cols-2',
          required: true,
        },
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
                { label: 'Horizontal C-M', value: 'horizontal-content-media' },
                { label: 'Horizontal M-C', value: 'horizontal-media-content' },
              ],
              defaultValue: 'media-content',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
