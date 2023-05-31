import useFetch from "./useFetch";
import Loading from './Loading';
import { Link } from "react-router-dom";
import '../App.css';
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../components/cartSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const FetchingData = () => {
  const { data: products, loading, error} = useFetch('products');
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

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
            <button onClick={() => handleAddToCart(product)} className="addToCart">Add to Cart</button>
          </div>
        ))
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
};

export default FetchingData;