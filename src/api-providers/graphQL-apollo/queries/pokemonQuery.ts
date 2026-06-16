import { gql } from '@apollo/client'

/**
 * For GraphQL is reachable only Beta PokeApi version, see link below, how to setup
 * https://beta.pokeapi.co/graphql/console/
 */

export const GET_POKEMONS_ABILITY_V2 = gql`
  query Pokemon_v2_ability($offset: Int, $limit: Int, $orderBy: [pokemon_v2_ability_order_by!]) {
    pokemon_v2_ability(offset: $offset, limit: $limit, order_by: $orderBy) {
      id
      name
    }
  }
`

export const GET_POKEMON_ABILITY_V2 = gql`
  query Pokemon_v2_ability($pokemonV2AbilityByPkId: Int!) {
    pokemon_v2_ability_by_pk(id: $pokemonV2AbilityByPkId) {
      name
      id
    }
  }
`
