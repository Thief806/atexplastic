import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const products = [
  {
    id: 101,
    name: "Mini tégely 50ml",
    images: [
      "/images/Termekek/Mini_jar50ml_nyitott.png",
      "/images/Termekek/Mini_jar50ml_zart.png",
    ],
    details: [
      "Tégely Anyaga: PET",
      "Tető anyaga: PP",
      "Súly: 15g",
      "Befogó méretek: 50mm x 40mm",
    ],
    category: "Mini tégelyek",
    description:
      "Nyaktípus: menetes  Forma: hengeres  A tégely és tető színe megegyezés szerint változtatható.",
  },
  {
    id: 102,
    name: "Mini tégely 100ml",
    images: [
      "/images/test-product-img.png", 
      "/images/Mini_jar50ml.jpg",
    ],
    details: [
      "Tégely Anyaga: PET", 
      "Tető anyaga: PP", 
      "Súly 25g", 
      "Befogó méretek: 50mm x 70mm",
    ],
    category:"Mini tégelyek",
    description:
    "Nyaktípus: menetes  Forma: hengeres  A tégely és tető színe megegyezés szerint változtatható.",
  },
  {
    id: 201,
    name: "Ovális tégely 150ml",
    images: [
      "/images/Termekek/Ovalis150ml_nyitott.png",
      "/images/Termekek/Ovalis150ml_zart_1.png",
      "/images/Termekek/Ovalis150ml_zart_2.png",
    ],
    details: [
      "Tégely Anyaga: PET", 
      "Tető anyaga: PP", 
      "Súly 40g", 
      "Befogó méretek: 30mm x 40mm x 60mm"
    ],
    category:"Ovális tégelyek",
    description:
      "Nyaktípus: menetes  Forma: ovális   A tégely és tető színe megegyezés szerint változtatható.",
  },
  {
    id: 301,
    name: "Hengeres sima 100ml tégely",
    images: [
      "/images/Termekek/Hengeres_sima100ml_nyitott.png",
      "/images/Termekek/Hengeres_sima100ml_zart.png",
    ],
    details: [
      "Tégely Anyaga: PET", 
      "Tető anyaga: PP", 
      "Súly 37g", 
     "Befogó méretek: 30mm x 70mm", 
      ],
    category: "Hengeres sima tégelyek",
    description:
    "Nyaktípus: menetes  Forma: ovális   A tégely és tető színe megegyezés szerint változtatható.",
  },
  {
    id: 401,
    name: "Hengeres magas 100ml tégely",
    images: [
      "/images/Termekek/Hengeres_magas100ml_nyitott.png",
      "/images/Termekek/Hengeres_magas100ml_zart.png",
    ],
    details: [
      "Tégely Anyaga: PET", 
     "Tető anyaga: PP", 
      "Súly 37g", 
      "Befogó méretek: 25mm x 100mm",
    ],
    description:
     "Nyaktípus: menetes  Forma: ovális   A tégely és tető színe megegyezés szerint változtatható.",
  },
  {
    id: 6,
    name: "Product Name 6",
    images: ["/images/test-product-img.png"],
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
];

const Products = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const categoryProducts = products.filter(
    (product) => product.category === categoryName
  );

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <div id="products" className="products-section">
      <h1 className="products-title">{categoryName}</h1>
      <div className="products-grid">
        {categoryProducts.map((product) => (
          <div key={product.id} className="products-grid-element">
            <Link to={`/product/${product.id}`}>
              {product.images.length > 0 && (
                <img
                  src={process.env.PUBLIC_URL + product.images[0]}
                  alt={product.name}
                />
              )}
            </Link>
            <div className="products-details">
              <h2>{product.name}</h2>
              {product.details.map((detail, index) => (
                <p key={index}>- {detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
