import React from "react";
import { products } from "../Products/Products";
import { useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import "../../styles/globals.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <Carousel className="w-full max-w-md mb-10">
        <CarouselContent>
          {product.images.map((image, index) => (
            <CarouselItem className="pl-9 pr-6" key={index}>
              <img
                className="product-image"
                src={process.env.PUBLIC_URL + image}
                alt={product.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pt-16 md:pt-24">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
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
