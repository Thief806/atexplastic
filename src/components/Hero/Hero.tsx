import React, { MouseEvent } from 'react';

function Hero() {
    const handleClick = (id: string) => (e: MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="hero-section">
            <div className="hero-left">
                <h1 className="main-slogan">
                    Biztonságos és <br /> minőségorientált <br /> megoldások a <br /> műanyaggyártásban.
                </h1>
                <p>Szorosan együttműködünk ügyfeleinkkel az innovációs újítások érdekében!</p>
                <div className="hero-buttons">
                    <button onClick={handleClick('contact')} className="offer-button">Ajánlatkérés</button>
                    <button onClick={handleClick('products')} className="products-button">Termékek</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={process.env.PUBLIC_URL + "/images/manufacturing-cycle.svg"} alt="Hero" />
            </div>
        </div>
    )
}

export default Hero;
