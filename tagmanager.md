#

##

###

#### session navigate/redirect --> traversal tracking

[cro] conversation optimization process https://www.hotjar.com/conversion-rate-optimization/

[spårnings-koder-och-google-analytics] combine tools https://www.hotjar.com/conversion-rate-optimization/

[] email marketing (acuquisition)

- session src + convesions
  [utm_medium, utm_source, utm_campaign, utm_term, utm_content, utm_id] -[type-traffic] user acquisition vs traffic acquisition [https://ga-dev-tools.google/campaign-url-builder/]
  [ga4] https://www.npmjs.com/package/react-ga4
  [gtm-module] https://www.npmjs.com/package/react-gtm-module

```sh
npm i react-ga4
```

- test
  [initial-setup] https://github.com/DutenLobarn/fmw23vecka39/blob/26sept-googleanalytics-eventstracking-demo/src/App.jsx (bellow done all pages)
  - setup link in tagmanager for page view and custom events (part in cro process)

#### set up trackable

[google-tagmanager-benefit-how-send?]

index.html

- missed this

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-85HJSPKQCY"
></script>
<script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'G-85HJSPKQCY')
</script>
```

1. activity + recommended events
2. custom evt --> dimensions

[användar-flöde]

HomePage.jsx

CartPage.jsx

[Product id].jsx

Login.tsx

Register.tsx

[event-tracking-datalayer]

- custom events

#### DAM and npm

[x]Spårningskoder & Google analytics

#### submit tags

[x]Google Tag manager & event tracking

[x]Användarflödesanalys

[x]Dokumentation & repportering

### initial setup

main.jsx

```jsx
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'G-9SVXN53H8H',
}

TagManager.initialize(tagManagerArgs)
```

index.html

```html
<head>
  <!-- Google Tag Manager -->
  <script>
    ;(function (w, d, s, l, i) {
      w[l] = w[l] || []
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : ''
      j.async = true
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
      f.parentNode.insertBefore(j, f)
    })(window, document, 'script', 'dataLayer', 'GTM-5Z45KQMX')
  </script>
  <!-- End Google Tag Manager -->
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript
    ><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-5Z45KQMX"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    ></iframe
  ></noscript>
  <!-- End Google Tag Manager (noscript) -->
</body>
```

App.jsx

```jsx
unction App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <RouterProvider router={router}>
      <AnalyticsTracker />
    </RouterProvider>
  )
}
```

##### handle click comment react ga instance

Navbar.jsx
ProductCard.jsx
ProductItem.jsx
Login.tsx
Register.tsx
