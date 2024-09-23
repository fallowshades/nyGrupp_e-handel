#

##

1. Metadata & open graph-tags
2. sitemap
3. robots.txt
4. mobilvänlighet/responsiv
5. prestandaoptimering

### store dynamically rendered meta tags

#### accessible store (required,optional dynamic wrapper props auto triggered)

[react-helment-async] https://www.npmjs.com/package/react-helmet-async

[metatag] https://dombrisco.medium.com/html-metatags-203cbeb94215

```sh
npm i react-helmet-async
```

app.jsx

- wrapp provider

```js
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>...</HelmetProvider>
)
```

page

- CartPage, Login, Register, HomePage, [ProductId]

```js
const Home = () => (
  <div>
    <MetaTags
      title="Hem - Start page"
      description="Välkommen till min hemsida."
    />
    ...
)
```

seo/MetaTags

```js
import { Helmet } from 'react-helmet-async'

const MetaTags = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Helmet>
)

export default MetaTags
```

[mdn] https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#SEO_tags
[open-graph] https://ogp.me/

```js
import { Helmet } from 'react-helmet-async'

const MetaTags = ({ title, description, url, canonicalUrl, ogImage }) => (
  <Helmet>
    {/* Meta Description */}
    <meta name="description" content={description} />

    {/* Canonical Link */}
    <link rel="canonical" href={canonicalUrl || url} />

    {/* Open Graph Tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {/* Open Graph Tags  extra*/}
    <meta property="og:url" content={url} />
    {ogImage && <meta property="og:image" content={ogImage} />}

    {/* Optional Charset and Viewport */}
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Helmet>
)

export default MetaTags
```

[seo-inspector] https://chromewebstore.google.com/detail/meta-seo-inspector/ibkclpciafdglkjkcibmohobjkcfkaef?hl=en

#### create statically?

sitemap-generator.js

```js
import register from '@babel/register'
// import { Sitemap } from "react-router-sitemap";
import routes from './sitemap-routes.js'

import pkg from 'react-router-sitemap'
//console.log("pkg-------------", pkg);=+

const { default: SitemapBuilder } = pkg

function generateSitemap() {
  const sitemap = new SitemapBuilder(routes)
    .applyParams({})
    .build('https://example.com')
    .save('./public/sitemap.xml')

  return sitemap
}

generateSitemap()
```

package.json

```json
   "generate-sitemap": "babel-node ./src/sitemap/sitemap-generator.js",
    "generate-robots": "node ./src/scripts/robot-txt-generator.js"
```

    // "babel-register": "^6.26.0",
    // "react-router-sitemap": "^1.2.0",
    // "@babel/core": "^7.25.2",
    //"@babel/preset-env": "^7.25.4",
    //"@babel/register": "^7.24.6",

[router-sitemap] https://www.npmjs.com/package/react-router-sitemap (requires react@^15.1.0 || ^16.0.0, but your project is using react@18.3.)

```sh
npm generate-sitemap
```

#### whatever

[wave-plugin] https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh

robot-txt-generator.js

```jsx
import fs from 'fs'

const generateRobotsTxt = () => {
  const environment = process.env.NODE_ENV
  let content = 'User-agent: *\n'

  if (environment === 'production') {
    // Tillåter alla sidor
    content = 'User-agent: *\n'
  } else {
    // Blockerar alla sidor i utvecklingsmiljön
    content += 'Disallow: *\n'
  }

  fs.writeFileSync('./public/robots.txt', content)
}

generateRobotsTxt()

// "generate-robots": "babel-node ./src/sitemap/sitemap-generator.js"
```

### omtimering

#### mobilvänlighet

```jsx
const sources = [
  //believe need delivey url with transformations /s--R44wFa4H--/ar_16:9,c_fill,g_auto/c_scale,w_1000/v1586049070/blue-chair.jpg
  {
    media: '(min-width: 1000px)',
    srcSet: 'hero.jpg',
  },
  {
    media: '(min-width: 700px)',
    srcSet: 'hero-edit.jpg',
  },
  {
    media: '(min-width: 1px)',
    srcSet: 'hero.jpg',
  },
]

{
  /**
        *    <img
            src="hero.jpg"
            alt="Fashion"
            className="w-full h-[400px] shadow-lg"
          />
        */
}
;<picture>
  {sources.map((source, index) => (
    <source key={index} media={source.media} srcSet={source.srcSet} />
  ))}
</picture>
```

#### prestanda optimering
