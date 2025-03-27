'use client'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'
import type { Header as HeaderType } from '@/payload-types'
export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex justify-between ml-auto sm:ml-0 -mt-14 pb-4 sm:pb-0 sm:mt-0">
      <Desktop navItems={navItems} />
      <Mobile navItems={navItems} />
    </nav>
  )
}
