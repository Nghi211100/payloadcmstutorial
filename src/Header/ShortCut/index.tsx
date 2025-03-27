'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import clsx from 'clsx'
import { Media } from '@/components/Media'

export const ShortCut: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.shortCuts || []

  return (
    <nav className="flex justify-between">
      <div className="flex justify-between gap-0.5 items-center -ml-4 sm:ml-0">
        {navItems.map(({ link, isNew, icon }, i) => {
          return (
            <CMSLink
              key={i}
              url={link.url}
              appearance="link"
              className={clsx(
                'bg-gradient-to-b from-[-1%] from-[#ffffff] to-[20%] to-secondary',
                'border border-gray-300 rounded-lg shadow-lg px-2 py-2 lg:px-3 lg:py-3',
                'relative flex items-center gap-1',
                'w-[120px] md:w-[130px] lg:w-[135px] h-full',
                'uppercase text-[11px] sm:text-xs text-white',
                'after:animate-bounce duration-400 after:delay-1000',
                isNew &&
                  '!to-primary after:-top-3 after:absolute after:right-0 after:w-[50px] after:h-[30px] after:bg-[url(/images/new.png)] after:bg-no-repeat after:bg-contain after:bg-center',
              )}
            >
              {icon && <Media resource={icon} className="size-6 min-w-6" />}
              <p className=" text-white text-pretty">{link.label}</p>
            </CMSLink>
          )
        })}
      </div>
    </nav>
  )
}
