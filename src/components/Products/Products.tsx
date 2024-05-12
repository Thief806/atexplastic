import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const products = [
  {
    id: 101,
    name: "Mini tégely 50ml",
    images: [
      "/images/Mini_jar50ml.jpg",
      "/images/Mini_jar50ml.jpg",
      "/images/Mini_jar50ml.jpg",
      "/images/Mini_jar50ml.jpg",
    ],
    details: [
      "Tégely Anyaga: PET",
      "Tető anyaga: PP",
      "Súly: 15g",
      "Befogó méretek: 50mm x 40mm",
    ],
    category: "Mini jar",
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
    category:"Mini jar",
    description:
    "Nyaktípus: menetes  Forma: hengeres  A tégely és tető színe megegyezés szerint változtatható.",
  },
  {
    id: 201,
    name: "Ovális tégely 150ml",
    images: [
      "/images/test-product-img.png",
    ],
    details: [
      "Tégely Anyaga: PET", 
      "Tető anyaga: PP", 
      "Súly 40g", 
      "Befogó méretek: 30mm x 40mm x 60mm"
    ],
    category:"Ovalis",
    description:
      "Nyaktípus: menetes  Forma: ovális   A tégely és tető színe megegyezés szerint változtatható.",
  },
  {
    id: 4,
    name: "Product Name 4",
    images: ["/images/test-product-img.png"],
    details: ["property 1", "property 2", "property 3", "property 4"],
    category: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 5,
    name: "Product Name 5",
    images: ["/images/test-product-img.png"],
    details: ["property 5", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
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
