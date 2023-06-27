function Hero() {
	return <div className="hero-section">
		<div className="hero-left">
			<h1 className="main-slogan">
				Biztonságos és minőségorientált megoldások a műanyaggyártásban.
			</h1>
			<p>Szorosan együttműködünk ügyfeleinkkel az innovációs újítások érdekében!</p>
			<div className="hero-buttons">
				<button className="offer-button">Ajánlatkérés</button>
				<button className="products-button">Termékek</button>
			</div>
		</div>
		<div className="hero-right">
			<img src={window.location.origin + "/images/manufacturing-cycle.svg"} alt="Hero" />
		</div>
	</div>
}

export default Hero;