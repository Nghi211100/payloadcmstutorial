'use client'

import { Menu } from '@headlessui/react'

import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import clsx from 'clsx'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        {navItems.map((item, i) => {
          // Handle dropdown menu
          if (item.row?.enableDropDown && item.dropdownItems?.length) {
            return (
              <Menu
                as="div"
                className={clsx(
                  'relative group h-full flex items-center px-2',
                  'hover:after:absolute hover:after:-bottom-[3px] hover:after:bg-primary hover:after:w-3 hover:after:h-3 hover:after:left-1/2 after:-translate-x-1  hover:after:rounded-full',
                )}
                key={i}
              >
                {item.link ? (
                  <CMSLink
                    {...item.link}
                    className="inline-flex items-center font-semibold hover:text-secondary"
                    label={item.label}
                  />
                ) : (
                  <Menu.Button className="inline-flex items-center font-semibold hover:text-secondary">
                    {item.label}
                  </Menu.Button>
                )}
                <div className="hidden group group-hover:block">
                  <Menu.Items
                    static
                    className="absolute left-0 top-12 z-10 mt-2 w-max rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Menu.Item key={dropdownIndex}>
                        {({ active }) => (
                          <CMSLink
                            {...dropdownItem.link}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm font-semibold hover:text-secondary border-b border-gray-200`}
                          />
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </div>
              </Menu>
            )
          }

          // Handle direct link
          if (item.row?.enableDirectLink && item.link) {
            return (
              <CMSLink
                key={i}
                {...item.link}
                appearance="link"
                label={item.label}
                className={clsx(
                  'font-bold hover:text-secondary text-primary text-base px-2 relative h-full flex items-center z-0',
                  'after:-z-10 hover:after:absolute hover:after:-bottom-[1px] hover:after:bg-primary hover:after:w-[11px] hover:after:h-[11px] hover:after:left-1/2 after:-translate-x-1  hover:after:rounded-full',
                )}
              />
            )
          }
          return (
            <span
              key={i}
              className={clsx(
                'font-bold text-primary px-2 relative h-full flex -z-10 items-center',
                'after:-z-10 hover:after:absolute hover:after:-bottom-[1px] hover:after:bg-primary hover:after:w-[11px] hover:after:h-[11px] hover:after:left-1/2 after:-translate-x-1  hover:after:rounded-full',
              )}
            >
              {item.label}
            </span>
          )
        })}
      </div>
    </nav>
  )
}
