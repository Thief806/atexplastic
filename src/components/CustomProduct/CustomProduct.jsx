import { useEffect } from "react";

function CustomProduct() {
    useEffect(() => {
        if (window.location.hash) {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView();
          }
        }
      }, []);
    return <div id="customproduct" className="custom-product-detail">
        <img className="custom-product-image" src={process.env.PUBLIC_URL + "/images/tools.png"} alt="Tools" />
        <div className="custom-product-info">
            <h2 className="custom-product-title">Személyre szabás</h2>
            <p className="custom-product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nulla atque dolores omnis ad, excepturi iure cupiditate ut quaerat soluta vero fuga. Quae alias dicta quam, dolorum modi facilis blanditiis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis distinctio sunt voluptatibus est repudiandae quo suscipit officia debitis, odit quibusdam ab beatae error sapiente voluptates rerum. Delectus quaerat quam totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet veritatis animi minima id blanditiis culpa quam, nemo ratione.</p>
        </div>
    </div>
}

export default CustomProduct;
