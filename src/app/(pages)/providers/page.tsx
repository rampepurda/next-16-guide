export default function ProvidersPage() {
  return (
    <div>
      <h2>Providers Page</h2>
      <h3>
        Typescript with Apollo Client v4+ <mark>news</mark>
      </h3>

      <section>
        <ul>
          <li>
            <p>
              Message <strong>deprecated</strong>: Tato hláška se vyskutuje při použití:{' '}
              <strong>.query, useQuery</strong>
            </p>
          </li>
          <li>
            Nově je nutno otypovat přímo gql parametry: &nbsp;
            <a href="https://www.apollographql.com/docs/react/data/typescript" target="_blank">
              Více zde
            </a>
            &nbsp;anebo mrkni přímo do: api-providers/graphQL-apollo/pokemonQuery
          </li>
        </ul>
      </section>
    </div>
  )
}
