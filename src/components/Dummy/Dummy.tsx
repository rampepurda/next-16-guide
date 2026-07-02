'use client'

import { useLikeContext } from '@/contexts'
import { Button } from '@/components/UI'

export const Dummy = () => {
  const { user, fns } = useLikeContext()

  return (
    <>
      <h3>{user.like}</h3>
      <p>Name: {user.name}</p>
      <Button
        className="btn btn-info"
        onClick={() => fns.like()}
        type="button"
        style={{ width: '10%' }}
      >
        like
      </Button>
      <Button
        className="btn btn-remove"
        onClick={() => fns.disLike()}
        type="button"
        disabled={user.like === 0}
        style={{ width: '10%' }}
      >
        dislike
      </Button>
      {user.like > 3 && <p style={{ color: 'red' }}>Your Profile got noticed</p>}
    </>
  )
}
