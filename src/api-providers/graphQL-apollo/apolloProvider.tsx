'use client'

import React, { ReactNode } from 'react'
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/client-integration-nextjs'
import { uriPokemonApi } from '@/utils/uriPokemonLink'

function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: uriPokemonApi,
  })
}

export function ApolloClientProvider({ children }: { children: ReactNode }) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
