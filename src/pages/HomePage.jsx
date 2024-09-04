import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProducts(response);
      } catch (error) {
        console.log("error fetching products", error);
      }
    }
    getData();
  }, []);

  return (
    <div className="align-element py-20">
      <Header />
      <div className="displayProduct grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className=" border p-4 rounded shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-500">{product.price} SEK</p>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
      <Outlet /> <Link to="/CartItem">CartItem</Link>
      <Footer />
    </div>
  );
};

export default HomePage;
