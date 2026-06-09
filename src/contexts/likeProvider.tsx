'use client'

import React, { createContext, ReactNode, use, useState } from 'react'

type InitValLikesT<T> = {
  user: T
  fns: {
    like: () => void
    disLike: () => void
  }
}

export const LikeContext = createContext<InitValLikesT<{ name: string; like: number }> | null>(null)

export function LikeProvider({ children }: { children: ReactNode }) {
  const [user, setCount] = useState<{ name: string; like: number }>({
    name: '',
    like: 1,
  })
  const fns = {
    like: () => {
      return setCount({ like: user.like + 1, name: 'jan malina' })
    },
    disLike: () => {
      return setCount({ like: user.like - 1, name: 'alena rychla' })
    },
  }

  const intValues: InitValLikesT<{ like: number; name: string }> = {
    user,
    fns,
  }

  return <LikeContext value={intValues}>{children}</LikeContext>
}

export function useLikeContext() {
  const context = use(LikeContext)

  if (!context) throw Error('useLikeContext must be use only within LikeProvider')
  return context
}
