'use client'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { Footer, Page } from '@/payload-types'
import { usePathname } from 'next/navigation'
import React from 'react'

const ShortCutLinks = ({ shortCutLinks }: { shortCutLinks: Footer['shortCutLinks'] }) => {
  const pathname = usePathname()
  const linksRow = shortCutLinks?.linksRow || []
  const sticker = shortCutLinks?.sticker
  const showOnPages = shortCutLinks?.showOnPages as Page[]

  if (showOnPages.some((page) => pathname.includes(page.slug as string) || pathname === '/')) {
    return (
      <div className="relative">
        <div className=" container-custom">
          <div className="flex flex-col md:flex-row md:gap-10 items-center px-4 xs:px-5 xl:px-0 container py-4 md:py-0">
            <div>
              <CMSLink
                className="text-white font-bold text-sm h-max border-white text-[13px]"
                {...linksRow?.[0]?.link}
              />
            </div>
            <div className="flex items-center pt-2 md:py-4 ">
              {linksRow.map(({ link }, i) => (
                <CMSLink
                  className="text-white font-bold text-sm first:hidden border-r-2 h-max border-white text-[13px] px-2 last:border-0 first:border-r-0"
                  {...link}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-full left-0">
          <Media resource={sticker} className="w-[13vw] max-w-[280px] h-auto" />
        </div>
      </div>
    )
  }
  return null
}

export default ShortCutLinks
