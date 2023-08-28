import { useEffect } from "react";
import { Link } from "react-router-dom";

export const products = [
  {
    id: 1,
    name: "Product Name 1",
    image: "/images/test-product-img.png",
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorems ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 2,
    name: "Product Name 2",
    image: "/images/test-product-img.png",
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorems ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 3,
    name: "Product Name 3",
    image: "/images/test-product-img.png",
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 4,
    name: "Product Name 4",
    image: "/images/test-product-img.png",
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 5,
    name: "Product Name 5",
    image: "/images/test-product-img.png",
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 6,
    name: "Product Name 6",
    image: "/images/test-product-img.png",
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
];

function Products() {
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
      <h1 className="products-title">Termékeink</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="products-grid-element">
            <Link to={`/product/${product.id}`}>
              <img
                src={process.env.PUBLIC_URL + product.image}
                alt={product.name}
              />
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
}

export default Products;
