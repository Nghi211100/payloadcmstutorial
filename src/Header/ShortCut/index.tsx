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
      <div className="flex justify-between gap-[1px] items-center -ml-4 sm:ml-0">
        {navItems.map(({ link, isNew, icon }, i) => {
          return (
            <CMSLink
              key={i}
              url={link.url}
              appearance="link"
              className={clsx(
                'bg-[url(/images/tab-orange-r.png)] bg-no-repeat bg-right-top',
                'relative',
                'uppercase text-[11px] sm:text-xs text-white',
                'after:animate-bounce duration-400 after:delay-1000',
                isNew &&
                  '!bg-[url(/images/tab-lblue-r.png)] after:z-10 after:-top-3 after:absolute after:-right-[5px] after:w-[50px] after:h-[30px] after:bg-[url(/images/new.png)] after:bg-no-repeat after:bg-contain after:bg-center',
              )}
            >
              <span
                className={clsx(
                  'bg-[url(/images/tab-orange-l.png)] bg-no-repeat',
                  'w-[130px] lg:w-[135px] xl:w-[145px] lg:h-[54px]',
                  ' px-2 py-2 lg:px-3 lg:py-3',
                  'flex items-center gap-1',
                  isNew && '!bg-[url(/images/tab-lblue-l.png)]',
                )}
              >
                {icon && <Media resource={icon} className="size-[31px] min-w-[31px]" />}
                <p className=" text-white text-pretty font-bold">
                  {link.label.split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                      {word}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </span>
            </CMSLink>
          )
        })}
      </div>
    </nav>
  )
}
