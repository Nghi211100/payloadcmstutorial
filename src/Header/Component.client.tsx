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
      className="relative z-10 text-primary border-t-primary border-t-[5px]"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto">
        <div className="pb-4 flex justify-between">
          <Link href="/" className="pt-6">
            <Logo loading="eager" priority="high" className="invert dark:invert-0" />
          </Link>
          <div className="flex gap-4 items-start">
            <Link href="/sign-in" className="pt-4 font-bold">
              Sign In
            </Link>
            <HeaderAction data={data} />
          </div>
        </div>
        <div className="flex justify-between">
          <ShortCut data={data} />

          <HeaderNav data={data} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t-secondary border-t-2 h-[4px] bg-white z-0"></div>
    </header>
  )
}
