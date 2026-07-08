export default async function ServerComponentsPage() {
  return (
    <>
      <ul className="hasTypeDisc">
        <li>
          By default, layouts and pages are Server Components, which lets you fetch data and render
          parts of your UI on the server, optionally cache the result, and stream it to the client.
        </li>
        <li>
          When you need interactivity or browser APIs, you can use Client Components to layer in
          functionality.
        </li>
      </ul>
    </>
  )
}
