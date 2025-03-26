'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'
import { PhoneIcon } from 'lucide-react'

export const HeaderAction: React.FC<{ data: HeaderType }> = ({ data }) => {
  return (
    <div className="flex gap-2 justify-center items-center pb-6 bg-[url(/images/top-r1.png)] bg-no-repeat bg-cover w-[184px] h-[77px]">
      <PhoneIcon className="w-4 h-4 bg-transparent text-white" />
      <a href={`tel:${data?.phoneNumber}`} className="text-secondary font-bold">
        {data?.phoneNumber}
      </a>
    </div>
  )
}
