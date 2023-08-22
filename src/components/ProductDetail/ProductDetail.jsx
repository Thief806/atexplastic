import React from "react";
import { products } from "../Products/Products";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img
        className="product-image"
        src={process.env.PUBLIC_URL + product.image}
        alt={product.name}
      />
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
