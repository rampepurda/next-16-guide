'use client'

import { useQuery } from '@apollo/client/react'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { DataGeneric, Loader } from '@/components'
import Link from 'next/link'
import { TypiCodePostsDataPage } from '@/app/(pages)/client-components/fetchingData/tanStack/typiCodePostsDataPage'
import { Suspense, use } from 'react'
import fetchUseApi from '@/utils/useApi/fetchUseApi'
import { TypicodePostT } from '@/types/primary'
import { Divider } from '@/components/UI'

export default function ClientFetchingDataPage() {
  const typiCodePosts: TypicodePostT[] | undefined = use(fetchUseApi.typiCodePosts)
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
      <h3 className="color-is-gray">use() Api</h3>
      <p className="bg-color-is-darkmagenta bg-rounded-size-4 color-is-white">
        <strong>Použití:</strong> use client
      </p>
      <pre>import React, &#123; use &#125; from 'react'</pre>

      <ul className="hasTypeDisc">
        <li>
          Technicky lze v Next.js 16 používat API `use()` jak v klientských, tak v serverových
          komponentách, avšak v případě serverových komponent byste to dělat neměli.
        </li>
        <li>
          Ačkoli engine Reactu umožňuje použití `use()` na straně serveru k vyřešení promisů nebo
          kontextu, oficiální architektonický standard{' '}
          <em>
            Next.js stanoví, že pro serverové komponenty se má používat standardní `async/await`,
            zatímco `use()` je vyhrazeno výhradně pro klientské komponenty.
          </em>
        </li>
        <li>
          Všeobecně je v Next Client Api data fetching upřednostňován{' '}
          <mark className="bg-color-is-grayLight">use API</mark>, než zastaralá metoda požití
          useEffect
        </li>
      </ul>

      <ul className="pre hasOutline">
        <li>
          <h5>fetchApi:</h5>
          const <em className="color-is-darkmagenta">dataPromises</em> = fetchApi()
          <Divider />
        </li>
        <h5>Component:</h5>
        <li>&nbsp;</li>
        <li>
          export default function Posts(&#123; <strong>data</strong>, &#125;: &#123; data:
          Promise&lt;Type []&gt; &#125;) &#123;
        </li>
        <li>&nbsp;return (</li>
        <li>
          &nbsp;&nbsp;&#123;<span className="color-is-darkmagenta">data</span>.map(post =&gt;)&#125;
        </li>
        <li>
          ))&#125; <Divider />
        </li>
        <li>
          <h5>Page:</h5>
          import &#123;use&#125; "from react"
        </li>
        <li className="color-is-gray">import Posts from @/app/component</li>
        <li>import &#123; Suspense &#125; from react</li>
        <li>&nbsp;</li>
        <li>export default function Page() &#123;</li>
        <li>
          <span className="color-is-gray">// Don't await the data fetching function const</span>
          <p>
            const data = <strong>use</strong>(<em className="color-is-darkmagenta">dataPromises</em>
            )
          </p>
        </li>
        <li>&nbsp;</li>
        <li>return (</li>
        <li>&nbsp;&lt;Suspense fallback=&#123;...loader&#125;&gt;</li>
        <li className="color-is-gray">
          &nbsp;&nbsp; &lt;Posts posts==&#123;<strong>data</strong>&#125; /&gt;
        </li>
        <li>&nbsp;&lt;/Suspense&gt;</li>
        <li>
          )&#125; <Divider />
        </li>
        <li>
          <h5>Page Dynamic Segment:</h5>
          async function PostDetailPage(&#123; params &#125;: &#123; params: Promise&lt;&#123; id:
          string &#125;&gt; &#125;) &#123;
        </li>
        <li>&nbsp;const &#123;id&#125; = await params</li>
        <li>&#125;</li>
        <li>
          <Divider />
        </li>
        <li>
          <h5>Result:</h5>
          <Suspense fallback={<Loader />}>
            <DataGeneric
              classesNames={'hasTypeDecimal'}
              name={'postsApiData'}
              data={typiCodePosts}
              renderData={(post) => <Link href={`fetchingData/${post.id}`}>{post.title}</Link>}
              HTMLAttributes={{ cover: 'ul', content: 'li' }}
            />
          </Suspense>
        </li>
      </ul>

      <h3 className="color-is-gray">Tanstack:</h3>
      <p className="bg-color-is-darkmagenta bg-rounded-size-4 color-is-white">
        <strong>Použití:</strong> use client
      </p>

      <TypiCodePostsDataPage />

      <h3 className="color-is-gray">GraphQL with Apollo-client:</h3>
      <p className="bg-color-is-darkmagenta bg-rounded-size-4 color-is-white">
        <strong>Použití:</strong> use server | use client
      </p>
      <ul className=" pre hasOutline">
        <li>
          const &#123; data, loading &#125; = <strong>useQuery</strong>(GET_POKEMONS_ABILITY_V2,
          &#123;
        </li>
        <li>&nbsp;variables: &#123;</li>
        <li>&nbsp;&nbsp;offset: 5,</li>
        <li>&nbsp;&nbsp;limit: 3,</li>
        <li>&nbsp;&nbsp;orderBy: [&#123;</li>
        <li>&nbsp;&nbsp;&nbsp;name: 'asc', &#125;,</li>
        <li>
          &nbsp;&#125;
          <Divider />
        </li>
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
            <li>
              &#125;)
              <Divider />
            </li>
          </ul>
        </li>
        <li>
          <h5>Result:</h5>
        </li>
        <li>
          {loading && <Loader />}
          {data?.pokemon_v2_ability && (
            <DataGeneric
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
    </>
  )
}
