export default async function ClientComponentsPage() {
  return (
    <>
      <h4>When to use Client Components?</h4>
      <p>
        The client and server environments have different capabilities. Server and Client Components
        allow you to run logic in each environment depending on your use case.
      </p>

      <ul className="hasTypeDisc">
        <li>
          <em className="color-is-darkmagenta">State </em> and{' '}
          <em className="color-is-darkmagenta">event handlers</em>. E.g. onClick, onChange.
        </li>
        <li>
          <em className="color-is-darkmagenta">Lifecycle logic</em>. E.g. useEffect.
        </li>
        <li>Browser-only APIs. E.g. localStorage, window, Navigator.geolocation, etc.</li>
        <li>
          <em className="color-is-darkmagenta">Custom hooks</em>
        </li>
      </ul>
    </>
  )
}
