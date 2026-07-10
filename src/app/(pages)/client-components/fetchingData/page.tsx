'use client'

import { useQuery } from '@apollo/client/react'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { DataClientRender, DataRendered, Loader } from '@/components'
import Link from 'next/link'
import { PostsDataPage } from '@/app/(pages)/client-components/fetchingData/tanStack/postsDataPage'
import { Suspense } from 'react'
import { environments } from '@/configuration'
import { TypicodePostT } from '@/types/primary'
import fetchApi from '@/utils/fetchApi'

export default function ClientFetchingDataPage() {
  const postsApiData: Promise<TypicodePostT[]> = fetchApi.getDataClient(
    null,
    `${environments.typicodePosts}?_limit=2`
  )

  const { data, loading } = useQuery(GET_POKEMONS_ABILITY_V2, {
    variables: {
      offset: 5,
      limit: 3,
      orderBy: [
        {
          name: 'asc',
        },
      ],
    },
  })

  return (
    <>
      <h3 className="color-is-gray">
        Fetching Api data: <em>use and &lt;Suspense /&gt;</em>
      </h3>
      <p>
        Všeobecně je v Next Client Api data fetching upřednostňován{' '}
        <mark className="bg-color-is-grayLight">use API</mark>, než zastaralá metoda požití
        useEffect.
      </p>

      <pre>
        <ul className="hasOutline">
          <li>
            <h5>Component:</h5>
          </li>
          <li>import &#123;use&#125; "from react"</li>
          <li>&nbsp;</li>
          <li>
            export default function Posts(&#123; <strong>data</strong>, &#125;: &#123; data:
            Promise&lt;Type []&gt; &#125;) &#123;
          </li>
          <li className="color-is-gray">
            &nbsp;const allPosts = <strong>use</strong>(data)
          </li>
          <li>&nbsp;return (</li>
          <li>
            &nbsp;&nbsp;&#123;<span className="color-is-gray">allPosts</span>.map(post =&gt;)&#125;
          </li>
          <li>))&#125;</li>
          <li>&nbsp;</li>
          <li>
            <h5>Page:</h5>
          </li>
          <li className="color-is-gray">import Posts from @/app/component</li>
          <li>import &#123; Suspense &#125; from react</li>
          <li>&nbsp;</li>
          <li>export default function Page() &#123;</li>
          <li>
            // Don't await the data fetching function const
            <p>
              <strong>posts</strong> = getPosts()
            </p>
          </li>
          <li>&nbsp;</li>
          <li>return (</li>
          <li>&nbsp;&lt;Suspense fallback=&#123;...loader&#125;&gt;</li>
          <li className="color-is-gray">
            &nbsp;&nbsp; &lt;Posts posts==&#123;<strong>posts</strong>&#125; /&gt;
          </li>
          <li>&nbsp;&lt;/Suspense&gt;</li>
          <li>)&#125;</li>
          <li>
            <h5>Result:</h5>
            <Suspense fallback={<Loader />}>
              <DataClientRender
                classesName={'hasTypeDecimal'}
                name={'postsApiData'}
                dataPromise={postsApiData}
                renderData={(post) => <>{post.title}</>}
                HTMLAttributes={{ cover: 'ul', content: 'li' }}
              />
            </Suspense>
          </li>
        </ul>
      </pre>

      <h3 className="color-is-gray">Tanstack:</h3>
      <PostsDataPage
        hasLink={{
          link: '/client-components/fetchingData/',
          title: 'Click to open Dynamic Route Segments, detail',
        }}
      />

      <h3 className="color-is-gray">GraphQL with Apollo-client:</h3>
      <pre>
        <ul className="hasOutline">
          <li>
            const &#123; data, loading &#125; = <strong>useQuery</strong>(GET_POKEMONS_ABILITY_V2,
            &#123;
          </li>
          <li>&nbsp;variables: &#123;</li>
          <li>&nbsp;&nbsp;offset: 5,</li>
          <li>&nbsp;&nbsp;limit: 3,</li>
          <li>&nbsp;&nbsp;orderBy: [&#123;</li>
          <li>&nbsp;&nbsp;&nbsp;name: 'asc', &#125;,</li>
          <li>&nbsp;&#125;</li>
          <li>
            <h5>Dynamic Route Segments</h5>
            <ul>
              <li>
                const params = <strong>useParams()</strong>
              </li>
              <li>
                const &#123; data, error, loading &#125; = <strong>useQuery</strong>
                (GET_POKEMON_ABILITY_V2, &#123;
              </li>
              <li>&nbsp;variables: &#123;</li>
              <li>&nbsp;&nbsp;pokemonV2AbilityByPkId: Number(params.id),</li>
              <li>&nbsp; &#125;,</li>
              <li>&#125;)</li>
            </ul>
          </li>
          <li>
            <h5>Result:</h5>
          </li>
          <li>
            {loading && <Loader />}
            {data?.pokemon_v2_ability && (
              <DataRendered
                classesNames={'hasTypeDecimal'}
                name={'pokemon_v2_ability'}
                data={data.pokemon_v2_ability}
                HTMLAttributes={{ cover: 'ul', content: 'li' }}
                renderData={(poke) => (
                  <Link href={`fetchingData/graphql-apollo/${poke.id}`}>{poke.name}</Link>
                )}
              />
            )}
          </li>
        </ul>
      </pre>

      <h3>Dynamic Route Segments</h3>
    </>
  )
}
