export default async function ServerComponentsPage() {
  return (
    <>
      <p>
        By default, layouts and pages are <em className="color-is-gray">Server Components</em>,
        which lets you fetch data and render parts of your UI on the server, optionally cache the
        result, and stream it to the client.
      </p>
      <p>
        When you need interactivity or browser APIs, you can use Client Components to layer in
        functionality.
      </p>

      <h4>Use Server Components when you need:</h4>
      <ul className="hasTypeDisc">
        <li> Fetch data from databases or APIs close to the source.</li>
        <li>Use API keys, tokens, and other secrets without exposing them to the client.</li>
        <li> Reduce the amount of JavaScript sent to the browser.</li>
        <li>
          Improve the First Contentful Paint (FCP), and stream content progressively to the client.
        </li>
      </ul>
    </>
  )
}
