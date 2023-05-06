import useFetch from "../components/useFetch";
import { useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams } from "react-router-dom";
import '../App.css'

const ProductDetail = ({ match }) => {
  const {id} = useParams()
  
  const { data: products, loading, error} = useFetch(`products/${id}`);

  

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
      </div>
    </div>
    
  );
};

export default ProductDetail;