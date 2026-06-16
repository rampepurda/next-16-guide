import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/client-integration-nextjs'
import { uriPokemonApi } from '@/utils/uriPokemonLink'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    link: uriPokemonApi,
    cache: new InMemoryCache(),
  })
})
