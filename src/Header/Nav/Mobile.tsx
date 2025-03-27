import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import { Menu as MenuIcon } from 'lucide-react'

export const Mobile: React.FC<{ navItems: HeaderType['navItems'] }> = ({ navItems }) => {
  return (
    <div className="block lg:hidden">
      <Menu>
        <div className="flex items-center justify-center h-full relative">
          <Menu.Button className="uppercase text-black flex items-center justify-center gap-2 bg-gradient-to-b from-[#fafaf9] to-[#f9f7f1] border border-gray-200 rounded-lg shadow-lg px-4 py-2">
            <p className="text-sm font-bold">Menu</p>
            <MenuIcon className="w-6 h-6 text-gray-600" />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute top-[160px] w-[320px] right-0 bg-white shadow-lg z-10 text-xs max-h-[75vh] overflow-y-auto">
          {navItems?.map((item, i) => {
            if (item.row?.enableDirectLink && item.link) {
              return (
                <div key={i}>
                  <div className="border-b border-neutral-200">
                    <CMSLink
                      {...item.link}
                      appearance="link"
                      label={item.label}
                      className={clsx(
                        'font-bold hover:text-secondary text-primary text-xs h-full flex items-center z-0 p-4',
                      )}
                    />
                  </div>
                  {item.row?.enableDropDown &&
                    item.dropdownItems?.length &&
                    item.dropdownItems.map((dropdownItem, j) => (
                      <div key={j} className="border-b border-neutral-200">
                        <CMSLink
                          {...dropdownItem.link}
                          className="pl-3 flex items-center font-bold hover:text-secondary py-4 px-8"
                        />
                      </div>
                    ))}
                </div>
              )
            }
            return (
              <span
                key={i}
                className={clsx(
                  'font-semibold text-primary px-2 relative h-full flex -z-10 items-center',
                )}
              >
                {item.label}
              </span>
            )
          })}
        </Menu.Items>
      </Menu>
    </div>
  )
}
