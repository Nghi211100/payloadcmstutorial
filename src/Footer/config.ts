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
      type: 'group',
      name: 'shortCutLinks',
      label: 'Shortcut Links',
      admin: {
        description: 'Configure shortcut links and their display settings.',
      },
      fields: [
        {
          label: ' ',
          name: 'linksRow',
          type: 'array',
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
        {
          name: 'showOnPages',
          type: 'relationship',
          relationTo: 'pages',
          hasMany: true,
          admin: {
            description:
              'Check the pages where you want to show these links. You can select multiple pages.',
          },
        },
        {
          name: 'sticker',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload a sticker image to display with these links.',
          },
        },
      ],
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
