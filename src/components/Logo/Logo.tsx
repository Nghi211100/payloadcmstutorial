import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="StorHub Logo"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('w-[112px] h-[56px] md:w-[130px] md:h-[65px]', className)}
      src="/images/logo.png"
    />
  )
}
