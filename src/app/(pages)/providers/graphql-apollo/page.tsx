'use client'

import { useQuery } from '@apollo/client/react'
import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { DataRendered, Loader } from '@/components'
import { ExternalLink } from '@/components/UI'

export default function GraphQLApolloPage() {
  const { data, loading } = useQuery(GET_POKEMONS_ABILITY_V2, {
    variables: {
      offset: 5,
      limit: 7,
      orderBy: [
        {
          name: 'asc',
        },
      ],
    },
  })

  return (
    <div>
      <h2>
        Typescript with Apollo Client v4+&nbsp;
        <mark className="bg-color-is-orange">new</mark>
      </h2>

      <section>
        <ul>
          <li>
            <p>
              Message <strong>deprecated</strong>: Tato hláška se vyskutuje při použití:&nbsp;
              <strong>.query, useQuery</strong>
            </p>
          </li>
          <li>
            Nově je nutno otypovat přímo gql parametry: &nbsp;
            <ExternalLink
              url={'https://www.apollographql.com/docs/react/data/typescript'}
              title={' Více zde'}
            />
            &nbsp;anebo mrkni přímo do: api-providers/graphQL-apollo/pokemonQuery
          </li>
          <li>
            <h5>Použití v Next:</h5>
            <p>
              <strong>'use server': </strong>
              const &#123; data, error &#125; = await <strong>query.</strong>
              (GET_POKEMONS_ABILITY_V2, &#123; variables:&#125;)
            </p>
            <p>
              <strong>'use client':</strong> const &#123; data, loading &#125; =
              <strong> useQuery</strong>(GET_POKEMONS_ABILITY_V2, &#123; variables:&#125;)
            </p>
          </li>
        </ul>
        {loading && <Loader />}
        <DataRendered
          classesNames={'hasTypeDecimal'}
          name={'typeCodePosts'}
          data={data?.pokemon_v2_ability}
          HTMLAttributes={{ cover: 'ul', content: 'li' }}
          renderData={(poke) => <span>{poke.name}</span>}
        />
      </section>
    </div>
  )
}
