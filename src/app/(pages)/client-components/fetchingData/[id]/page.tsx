'use client'

import { TypicodePostT } from '@/types/primary'
import fetchApi from '@/utils/fetchApi'
import { Loader } from '@/components'
import { environments } from '@/configuration'
import { Suspense, use, useEffect, useState } from 'react'

export default function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const paramPost = use(params)
  const [post, setPost] = useState<TypicodePostT | undefined>()

  useEffect(() => {
    async function fetchPostApi() {
      const posts: TypicodePostT | undefined = await fetchApi.externalApi(
        `${environments.typicodePosts}/${Number(paramPost.id)}`
      )
      setPost(posts)
    }
    fetchPostApi().then()
  }, [paramPost.id])

  return (
    <section>
      <h3 className="color-is-gray">
        fetch Api Data/<em>detail</em>
      </h3>

      <ul className="pre hasOutline">
        <li>
          function PostDetailPage(&#123; params &#125;: &#123;
          <span className="color-is-darkmagenta">
            params: Promise&lt;&#123; id: string &#125;&gt;{' '}
          </span>
          &#125; ) &#123;
        </li>
        <li className="color-is-red">&nbsp;const paramPost = use(params)</li>
        <li>&nbsp;const [post, setPost] = useState()</li>
        <li>&nbsp;</li>
        <li>&nbsp;useEffect(() =&gt; &#123;</li>
        <li>&nbsp;&nbsp; async function fetchApi() &#123;</li>
        <li>&nbsp;&nbsp;&nbsp; const data = await fetchApi.externalApi( `url/paramPost.id)` )</li>
        <li>&nbsp;&nbsp;&nbsp; setPost(data)</li>
        <li>&nbsp;&nbsp;&#125;</li>
        <li>&nbsp;&nbsp;fetchApi().then()</li>
        <li>
          &nbsp;&nbsp;&#125;, [<span className="color-is-darkmagenta">paramPost.id</span>])
        </li>
        <li>&nbsp;&#125;</li>
        <li>&#125;</li>
      </ul>

      <Suspense fallback={<Loader />}>
        {post && (
          <div>
            <label>Title:</label>
            <h4>{post?.title}</h4>
            <label>Description:</label>
            <p>{post?.body}</p>
          </div>
        )}
      </Suspense>
    </section>
  )
}
