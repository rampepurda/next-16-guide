import { fetchExternalApi } from '@/serverActions/externalApi'
import { PokemonT, TypicodePostT } from '@/types/primary'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { query } from '@/api-providers/graphQL-apollo/apollo-server-provider'

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=3'

export default async function AboutPage() {
  const posts: TypicodePostT[] | undefined = await fetchExternalApi(url, {
    method: 'GET',
  })

  const { data } = await query<{ pokemon_v2_ability: PokemonT[] | undefined }>({
    query: GET_POKEMONS_ABILITY_V2,

    variables: {
      offset: 1,
      limit: 5,
      orderBy: [
        {
          name: 'desc',
        },
      ],
    },
  })

  return (
    <>
      <h2>Server Action Page, welcome</h2>
      <ul>
        <li>
          <strong>GraphQL - Apollo Client:</strong> je možno použít jak v 'use client', tak 'use
          server'
          <p>
            <em>
              <strong>'use server': </strong>
            </em>
            const &#123; data &#125; ={' '}
            <strong>
              <em>await apolloClient.query</em>
            </strong>
            &lt;T&gt;(&#123;query, variables)&#125;
          </p>
          {data && data.pokemon_v2_ability?.map((poke) => <p key={poke.id}>{poke.name}</p>)}
          {posts ? (
            <>
              {posts?.map((i) => (
                <p key={i.id}>{i.body}</p>
              ))}
            </>
          ) : (
            'Something wrong.'
          )}
        </li>
        <li>&nbsp;</li>
        <li>
          <strong>TanStack:</strong> POUZE: 'use client'
        </li>
      </ul>
    </>
  )
}
