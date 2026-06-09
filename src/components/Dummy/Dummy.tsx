'use client'

import { useLikeContext } from '@/contexts'

export const Dummy = () => {
  const { user, fns } = useLikeContext()

  return (
    <>
      <h2>{user.like}</h2>
      <p>Name: {user.name}</p>
      <button onClick={() => fns.like()} type="button" style={{ width: '10%' }}>
        like
      </button>
      <button
        onClick={() => fns.disLike()}
        type="button"
        disabled={user.like === 0}
        style={{ width: '10%' }}
      >
        dislike
      </button>
      {user.like > 3 && <p style={{ color: 'red' }}>Your Profile got noticed</p>}
    </>
  )
}
