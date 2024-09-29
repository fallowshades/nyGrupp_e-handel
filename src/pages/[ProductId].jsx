import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
const ProductId = () => {
  const { items } = useSelector((state) => state.products)

  let params = useParams()
  let clickedProduct = items.filter((item) => item.id == params.id)

  useEffect(() => {
    if (clickedProduct[0]) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'view_product',
        product_id: clickedProduct[0].id,
        product_name: clickedProduct[0].name,
        product_category: clickedProduct[0].category,
        product_price: clickedProduct[0].price,
      })
    }
  }, [clickedProduct])
  return clickedProduct.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      imgSrc={product.image}
      imgAlt={product.title}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ))
}

export default ProductId
