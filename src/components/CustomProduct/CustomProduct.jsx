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
        <img className="custom-product-image" src={process.env.PUBLIC_URL + "/images/egyedi_termek_gyartas.jpeg"} alt="Tools" />
        <div className="custom-product-info">
            <h2 className="custom-product-title">Egyedi termék gyártása</h2>
            <p className="custom-product-description">
              Cégünk vállalja egyedi termékek gyártásának kivitelezését is. Ezesetben kérjük vegyék fel velünk a kapcsolatot és megtárgyaljuk a részleteket.
              </p>
        </div>
    </div>
}

export default CustomProduct;
