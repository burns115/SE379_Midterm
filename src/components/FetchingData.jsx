import useFetch from "./useFetch";
import Loading from './Loading';
import { Link } from "react-router-dom";
import '../App.css';

const FetchingData = () => {
  const { data: products, loading, error} = useFetch('products');

  if (error) {
    return <p>An error occurred</p>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="product-item" key={product.id}>
            <Link to={`/ProductDetail/${product.id}`} className="product-link">
              <img className="product-image" src={product.image} alt={product.title} />
              <h2 className="product-title">{product.title}</h2>
            </Link>
          </div>
        ))
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
};

export default FetchingData;