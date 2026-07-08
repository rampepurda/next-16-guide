import { gql } from '@apollo/client'
import { TypedDocumentNode } from '@apollo/client'
import {
  GetPokemonsAbility_V2T,
  GetPokemonAbility_V2T,
  GetVariablesT,
} from '@/api-providers/graphQL-apollo/queries/types'

/**
 * For GraphQL is reachable only Beta PokeApi version, see link below, how to setup
 * https://beta.pokeapi.co/graphql/console/
 */

export const GET_POKEMONS_ABILITY_V2: TypedDocumentNode<GetPokemonsAbility_V2T, GetVariablesT> =
  gql`
    query Pokemon_v2_ability($offset: Int, $limit: Int, $orderBy: [pokemon_v2_ability_order_by!]) {
      pokemon_v2_ability(offset: $offset, limit: $limit, order_by: $orderBy) {
        id
        name
      }
    }
  `

export const GET_POKEMON_ABILITY_V2: TypedDocumentNode<
  GetPokemonAbility_V2T | undefined,
  GetVariablesT
> = gql`
  query Pokemon_v2_ability($pokemonV2AbilityByPkId: Int!) {
    pokemon_v2_ability_by_pk(id: $pokemonV2AbilityByPkId) {
      name
      id
    }
  }
`
