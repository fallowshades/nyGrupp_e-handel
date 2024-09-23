import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import MetaTags from '../seo/MetaTags'
const HomePage = () => {
  const { items, status, error } = useSelector((state) => state.products)

  if (status === 'loading') return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  console.log(items, status, error)

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

  return (
    <div className="">
      <MetaTags
        type="advanced"
        title="Hem - Start page"
        description="Välkommen till min hemsida."
        url="http://localhost:5176/" // Provide the full URL for Open Graph
        canonicalUrl="http://localhost:5176/" // Full URL for canonical
      />
      <div className="relative flex justify-center items-center flex-col  ">
        <div className="p-20 w-full">
          {/**
        *    <img
            src="hero.jpg"
            alt="Fashion"
            className="w-full h-[400px] shadow-lg"
          />
        */}
          <picture>
            {sources.map((source, index) => (
              <source key={index} media={source.media} srcSet={source.srcSet} />
            ))}
          </picture>
          <img
            src="hero.jpg"
            alt="Fashion"
            className="w-full h-[400px] shadow-lg"
          />
        </div>

        <div className="absolute left-10 flex flex-col text-white text-center pl-10 responsive-hero">
          <h3 className="text-3xl p-5">More than what you might expect.</h3>
          <p className="text-2xl">Fashion, Beauty, Design and much more!</p>
        </div>
      </div>

      <ul className="displayProduct grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-gray-100 border m-4 p-10">
        {items.map((product) => (
          <li key={product.id}>
            <ProductCard
              imgSrc={product.image}
              imgAlt={product.title}
              title={product.title}
              id={product.id}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
