export default function SassPage() {
  return (
    <>
      <h3>Sass styling</h3>

      <ul className="hasTypeDecimal">
        <li>
          <h5>@import vs @use</h5>
          <ul>
            <li>
              <span className="bg-rounded bg-color-is-red bg-rounded-size-24">-</span> @import
              "mixins"
            </li>
            <li>
              <span className="bg-rounded bg-rounded-size-24" style={{ backgroundColor: 'green' }}>
                +
              </span>
              <strong>@use "mixins" </strong>&nbsp; | &nbsp;@include mixins.fontSize(1.5rem, 500);
            </li>
            <li>
              <span className="bg-rounded bg-rounded-size-24" style={{ backgroundColor: 'green' }}>
                +
              </span>
              <strong>@use "mixins" as *</strong>&nbsp; | &nbsp;background-color: $white;
            </li>
          </ul>
        </li>
        <li>
          <h5>
            map-get <em>vs</em> map.get
          </h5>

          <ul>
            <li>
              <span className="bg-rounded bg-color-is-red bg-rounded-size-24">-</span> map-get
            </li>
            <li>
              <span className="bg-rounded bg-rounded-size-24" style={{ backgroundColor: 'green' }}>
                +
              </span>
              <strong>map.get </strong>
            </li>
            <li>@use "sass:map";</li>
            <li>$spacer-1: map.get($spacers, 1);</li>
          </ul>
        </li>
        <li>
          <h5>Functions - values setup</h5>

          <ul>
            <li>
              <span className="bg-rounded bg-color-is-red bg-rounded-size-24">-</span> $colors:
              black blue darkblue;
            </li>
            <li>
              <span className="bg-rounded bg-rounded-size-24" style={{ backgroundColor: 'green' }}>
                +
              </span>
              <strong>$colors: ( "black": black, "blue": blue, "darkblue": darkblue)</strong>
            </li>
          </ul>
        </li>
        <li>
          <h4>transparentize()</h4>

          <ul>
            <li>
              <span className="bg-rounded bg-color-is-red bg-rounded-size-24">-</span>{' '}
              background-color: transparentize($white, .4);
            </li>
            <li>
              <span className="bg-rounded bg-rounded-size-24" style={{ backgroundColor: 'green' }}>
                +
              </span>
              &nbsp; @use "sass:color"; | @use "sass:color" as *;
            </li>
            <li>
              background-color: <strong>color.adjust($white, $alpha: -.4) ;</strong>
              <span className="color-is-gray">&nbsp;(Doporučeno pro přímou náhradu)</span>
            </li>
            <li>
              background-color: <strong>scale($white, $alpha: 40%) ;</strong>
              <span className="color-is-gray">&nbsp;(Doporučeno pro relativní změny)</span>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
