import useFetch from "../components/useFetch";
import { useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams } from "react-router-dom";
import '../App.css'
import { useDispatch } from "react-redux";
import { addToCart, getTotals} from "../components/cartSlice";
import { useSelector } from "react-redux";

const ProductDetail = ({ match }) => {
  const {id} = useParams()
  
  const { data: products, loading, error} = useFetch(`products/${id}`);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  

  if (error) {
    return <p>An error occurred</p>;
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="product-detail-container">
      <div className="product-item product-link">
        <img className='product-detail-image' src={products.image} alt={products.title} />
        <h2 className='product-title'>{products.title}</h2>
        <p>{products.description}</p>
        <p>Price: {products.price}</p>
        <button onClick={() => handleAddToCart(products)}>Add to Cart</button>
      </div>
    </div>
    
  );
};

export default ProductDetail;