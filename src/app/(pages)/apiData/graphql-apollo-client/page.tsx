'use client'

import { GET_POKEMONS_ABILITY_V2 } from '@/api-providers/graphQL-apollo/queries/pokemonQuery'
import { useQuery } from '@apollo/client/react'

export default function ApiDataPage() {
  const { data } = useQuery(GET_POKEMONS_ABILITY_V2, {
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
      <h2>GraphQL - Apollo Client Page</h2>
      {data?.pokemon_v2_ability && (
        <ul className="hasVerticalPadding-4 width-is-4">
          {data.pokemon_v2_ability.map((pokemon, idx: number) => (
            <li key={idx}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
