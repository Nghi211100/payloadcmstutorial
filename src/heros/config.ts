import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'homeHero',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Home Hero',
          value: 'homeHero',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
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
      label: false,
    },
    {
      name: 'selectLinkBox',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      admin: {
        condition: (_, { type } = {}) => ['homeHero'].includes(type),
      },
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'homeHero'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'homeHero'].includes(type),
        description: 'Enter the button text here.',
      },
    },
    {
      name: 'banner',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['homeHero'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
