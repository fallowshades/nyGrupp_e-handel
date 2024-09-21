import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { useDispatch } from "react-redux";
import MetaTags from "@/seo/MetaTags";
const ProductId = () => {
  const { items } = useSelector((state) => state.products);

  let params = useParams();
  let clickedProduct = items.filter((item) => item.id == params.id);
  let { id } = useParams();
  return (
    <div>
      <MetaTags
        type="advanced"
        title={`produkt - ${id}`} // Ensure the title is dynamic
        description={`Se produkter med ID ${id}. Vänligen kolla in detaljer och priser.`} // Updated description
        url={`http://localhost:5176/ProductId/${id}`} // Use the actual product ID
        canonicalUrl={`http://localhost:5176/ProductId/${id}`} // Full URL for canonical
      />
      {clickedProduct.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          imgSrc={product.image}
          imgAlt={product.title}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductId;
