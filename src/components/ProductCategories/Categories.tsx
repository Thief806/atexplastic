import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Categories = [
  {
    id: 1,
    name: "Mini tégelyekff",
    categoryName: "Mini tégelyek",
    images: ["/images/Termekek/Mini_jar50ml_nyitott.png"],
    details: ["Tégely Anyaga: PET", "Tető anyaga: PP", "Mérettartomány: 50ml - 200ml"],
  },
  {
    id: 2,
    name: "Ovális tégelyek",
    categoryName: "Ovális tégelyek",
    images: ["/images/Termekek/Ovalis150ml_nyitott.png"],
    details: ["Tégely Anyaga: PET", "Tető Anyaga: PP", "Mérettartomány: 50ml - 450ml"],
    },
  {
    id: 3,
    name: "Hengeres sima tégelyek",
    categoryName: "Hengeres sima tégelyek",
    images: ["/images/Termekek/Hengeres_sima100ml_nyitott.png"],
    details: ["Tégely Anyaga: PET", "Tető Anyaga: PP", "Mérettartomány: 50ml - 300ml"],
    },
  {
    id: 4,
    name: "Hengeres magas tégelyek",
    categoryName: "Hengeres magas tégelyek",
    images: ["/images/Termekek/Hengeres_magas100ml_nyitott.png"],
    details: ["Tégely Anyaga: PET", "Tető Anyaga: PP", "Mérettartomány: 50ml - 300ml"],
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
