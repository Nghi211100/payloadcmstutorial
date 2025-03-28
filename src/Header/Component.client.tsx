'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { HeaderAction } from './Action'
import { ShortCut } from './ShortCut'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className=" pl-0 md:pl-10 xl:pl-0 pr-3 z-10 text-primary border-t-primary border-t-[5px] sticky top-0 bg-white"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="px-4 md:px-0 container-custom">
        <div className="pb-4 flex justify-between">
          <Link href="/" className="pt-6">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>
          <div className="flex sm:gap-4 items-start">
            <Link href="/sign-in" className="pt-3 sm:pt-[18px] font-bold text-sm sm:text-base">
              Sign In
            </Link>
            <HeaderAction data={data} />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between">
          <ShortCut data={data} />

          <HeaderNav data={data} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t-secondary border-t-2 bg-white -z-10"></div>
    </header>
  )
}
