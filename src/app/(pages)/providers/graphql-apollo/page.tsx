import { ExternalLink } from '@/components/UI'

export default function GraphQLApolloPage() {
  return (
    <div>
      <h2>
        GraphQ | Typescript with Apollo Client v4+&nbsp;
        <mark className="bg-color-is-orange">new</mark>
      </h2>

      <section>
        <ul className="hasTypeDisc">
          <li>
            <p>
              Message <span className="bg-color-is-red bg-rounded-size-4">deprecated</span>&nbsp;
              Tato hláška se vyskytuje při použití:&nbsp;
              <strong>.query, useQuery</strong>
            </p>
            <p>
              Nově je nutno otypovat přímo gql queries: &nbsp;
              <ExternalLink
                url={'https://www.apollographql.com/docs/react/data/typescript'}
                title={' Více zde'}
              />
              &nbsp;anebo mrkni přímo do: api-providers/graphQL-apollo/pokemonQuery
            </p>
          </li>
          <li>
            <h5>Použití v prostředí:</h5>
            <ul>
              <li>
                use client: <strong>useQuery</strong> &nbsp;|&nbsp; use server:
                <strong> .query</strong>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  )
}
