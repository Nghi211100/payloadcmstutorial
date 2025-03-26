import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
        {
          name: 'children',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
      ],
      maxRows: 5,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      type: 'group',
      name: 'reference',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Enter the title for the custom field.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload an image for the custom field.',
          },
        },
        {
          name: 'href',
          type: 'text',
          admin: {
            description: 'Enter a URL to link the image to another page.',
          },
        },
      ],
    },
    {
      type: 'group',
      name: 'sticker',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload an image for the sticker.',
          },
        },
      ],
      admin: {
        description: 'Configure the sticker displayed on top of the footer.',
      },
    },
    {
      name: 'linksRow',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      admin: {
        description: 'Add links to display in a single row.',
      },
    },
    {
      name: 'footerText',
      type: 'text',
      admin: {
        description: 'Enter the footer text (e.g., copyright information).',
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload the social media icon.',
          },
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            description: 'Enter the URL for the social media link.',
          },
        },
      ],
      admin: {
        description: 'Add social media links with icons.',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
