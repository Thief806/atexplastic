function Hero() {
	return <div className="hero-section">
		<div className="hero-left">
			<h1 className="main-slogan">
				Biztonságos és <br /> minőségorientált <br /> megoldások a <br /> műanyaggyártásban.
			</h1>
			<p>Szorosan együttműködünk ügyfeleinkkel az innovációs újítások érdekében!</p>
			<div className="hero-buttons">
				<a href="#contact" className="offer-button">Ajánlatkérés</a>
				<a href="#products" className="products-button">Termékek</a>
				
			</div>
		</div>
		<div className="hero-right">
			<img src={process.env.PUBLIC_URL + "/images/manufacturing-cycle.svg"} alt="Hero" />
		</div>
	</div>
}

export default Hero;