'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'
import { PhoneIcon } from 'lucide-react'

export const HeaderAction: React.FC<{ data: HeaderType }> = ({ data }) => {
  return (
    <div className="flex justify-center items-center pt-3 sm:pt-0 sm:pb-[18px] bg-transparent sm:bg-[url(/images/top-r1.png)] bg-no-repeat bg-cover sm:w-[184px] sm:h-[77px] text-base -mt-1">
      <div className="flex items-center gap-2">
        <PhoneIcon className="w-4 h-4 bg-transparent text-white" />
        <a href={`tel:${data?.phoneNumber}`} className="text-secondary font-bold">
          {data?.phoneNumber}
        </a>
      </div>
    </div>
  )
}
