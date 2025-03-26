import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'row',
          type: 'group',
          fields: [
            {
              name: 'enableDirectLink',
              type: 'checkbox',
            },
            {
              name: 'enableDropDown',
              type: 'checkbox',
            },
          ],
        },
        {
          label: 'Direct Link',
          type: 'collapsible',
          fields: [
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.row?.enableDirectLink,
          },
        },
        {
          label: 'Dropdown',
          type: 'collapsible',
          fields: [
            {
              name: 'dropdownItems',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
              ],
            },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.row?.enableDropDown,
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'shortCuts',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        link({
          appearances: false,
        }),
        {
          name: 'isNew',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLeftLabel#RowLeftLabel',
        },
      },
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: false,
      admin: {
        components: {
          Field: '@/Header/Field#Field',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
