import React, { createContext, ReactNode, useState } from 'react'

type InitValLikesT<T> = {
  count: T
  fns: {
    like: () => void
    disLike: () => void
  }
}

const intValLike: InitValLikesT<{ like: number }> = {
  count: {
    like: 10,
  },
  fns: {
    like: () => alert('ahoj'),
    disLike: () => null,
  },
}

export const LikeContext = createContext<InitValLikesT<{ like: number }> | null>(intValLike)

export function LikeProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<{ like: number }>({
    like: 1,
  })
  const fns = {
    like: () => {
      alert('like was clicked')
      return setCount({ like: count.like + 1 })
    },
    disLike: () => {
      return setCount({ like: count.like - 1 })
    },
  }

  return <LikeContext value={{ count, fns }}>{children}</LikeContext>
}
