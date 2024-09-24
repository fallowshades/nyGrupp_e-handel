#

##

###

#### session navigate/redirect --> traversal tracking

[] email marketing (acuquisition)

[ga4] https://www.npmjs.com/package/react-ga4
[gtm-module] https://www.npmjs.com/package/react-gtm-module

```sh
npm i react-ga4
```

#### set up trackable

#### DAM and npm

#### submit tags

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
