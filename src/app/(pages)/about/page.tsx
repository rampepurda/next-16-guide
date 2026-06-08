'use client'

import { LikeContext, LikeProvider } from '@/contexts'
import React, { use } from 'react'

export default function AboutPage() {
  const likeContext = use(LikeContext)

  return (
    <LikeProvider>
      <h2>About Page, welcome</h2>
      <h2>{likeContext && likeContext.count.like}</h2>
      <button onClick={() => likeContext?.fns.like()} type="button" style={{ width: '10%' }}>
        like
      </button>
    </LikeProvider>
  )
}
