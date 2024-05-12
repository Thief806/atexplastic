import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Categories = [
  {
    id: 1,
    name: "Mini tégely",
    categoryName: "Mini jar",
    images: ["/images/Mini_jar50ml.jpg"],
    details: ["Tégely Anyaga: PET", "Tető anyaga: PP"],
  },
  {
    id: 2,
    name: "Ovális tégely",
    categoryName: "Ovalis",
    images: ["/images/test-product-img.png", "/images/Mini_jar50ml.jpg"],
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorems ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 3,
    name: "Hengeres sima tégely",
    categoryName: "Hengeres sima",
    images: ["/images/test-product-img.png"],
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
  {
    id: 4,
    name: "Hengeres kis szájú tégely",
    categoryName: "Hengeres kicsi",
    images: ["/images/test-product-img.png"],
    details: ["property 1", "property 2", "property 3", "property 4"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo accusantium aliquid dicta enim ea animi, officia quisquam repellat recusandae consequatur nulla, doloribus tempore unde soluta esse neque ab! Culpa.",
  },
];

function CategorySegment() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <div id="products" className="categories-section">
      <h1 className="categories-title">Termékeink</h1>
      <div className="categories-grid">
        {Categories.map(
          (category) =>
            category.categoryName && (
              <div key={category.id} className="categories-grid-element">
                <Link
                  to={`/${category.categoryName}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {category.images.length > 0 && (
                    <img
                      src={process.env.PUBLIC_URL + category.images[0]}
                      alt={category.name}
                    />
                  )}
                </Link>
                <div className="categories-details">
                  <h2>{category.name}</h2>
                  {category.details.map((detail, index) => (
                    <p key={index}>- {detail}</p>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default CategorySegment;
