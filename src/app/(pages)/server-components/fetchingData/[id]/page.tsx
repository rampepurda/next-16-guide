import { TypicodePostT } from '@/types/primary'
import fetchApi from '@/utils/fetchApi'
import { Loader } from '@/components'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Detail of Post ${id}`,
  }
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const url = `https://jsonplaceholder.typicode.com/posts/${Number(id)}`
  const posts: TypicodePostT | undefined = await fetchApi.externalApi(url, {
    method: 'GET',
  })

  return (
    <section>
      <h4>Fetching data dynamically</h4>
      <ul className="hasOutline">
        <li>
          <strong className="color-is-grayLight">generate metadata:</strong>
        </li>
        <li>import &#123; Metadata &#125; from 'next'</li>
        <li>&nbsp;</li>
        <li>
          export async function generateMetadata(&#123; params &#125;: &#123; params:
          Promise&lt;&#123; id: string &#125;&gt; &#125;): Promise&lt;Metadata&gt; &#125;
        </li>
        <li>&nbsp;const {id} = await params</li>
        <li>&nbsp;&nbsp;return &#123;</li>
        <li>&nbsp;&nbsp;&nbsp;title: `Detail of Post $&#123;id&#125;`,</li>
        <li>&nbsp;&nbsp;&nbsp;description: ,</li>
        <li>&nbsp;&#125;</li>
        <li>&nbsp;</li>
        <li>
          <strong className="color-is-grayLight">generated data:</strong>
        </li>
        <li>
          <em>async</em> function PostDetailPage(&#123; <strong>params</strong> &#125;: &#123;
          params: Promise&lt;&#123; id: string &#125;&gt; &#125;) &#125;
        </li>
        <li>
          &nbsp;const &#123; id &#125; = <em>await</em> <strong>params</strong>
        </li>
        <li>&nbsp;const url = `https://jsonplaceholder.typicode.com/posts/$ &#123;id &#125;`</li>
        <li>&nbsp;const posts: TypicodePostT | undefined = await fetchApi.externalApi(url)</li>
        <li>&#125;)</li>
      </ul>

      {posts ? (
        <>
          <label>Title:</label>
          <h4>{posts?.title}</h4>
          <label>Description:</label>
          <p>{posts?.body}</p>
        </>
      ) : (
        <Loader />
      )}
    </section>
  )
}
