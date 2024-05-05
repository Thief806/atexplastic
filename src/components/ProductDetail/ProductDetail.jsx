import React from "react";
import { products } from "../Products/Products";
import { useParams } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const images = imageslider

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <div className='product-imageslider'>
        <div className="prev"></div>
        <div className="slide-panel">
          {ImageList.map(image => {return(<img src={image} /> )})}
        </div>
        <div className="next"></div>
        src={process.env.PUBLIC_URL + product.image}
        alt={product.name}
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        {product.details.map((detail, index) => (
          <p className="product-details" key={index}>
            - {detail}
          </p>
        ))}
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
