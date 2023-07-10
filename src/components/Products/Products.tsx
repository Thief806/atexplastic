function Products() {
	return <div id="products" className="products-section">
		<h1 className="products-title">
			Termékeink
		</h1>
		<div className="products-grid">
			<div className="products-grid-element">
				<a href="/"><img src={process.env.PUBLIC_URL + "/images/test-product-img.png"} alt="Termék kép" /></a>
				<div className="products-details">
					<h2>Termék neve</h2>
					<p>- tulajdonság 1</p>
					<p>- tulajdonság 2</p>
					<p>- hosszú tulajdonság321123</p>
				</div>
			</div>
			<div className="products-grid-element">
				<a href="/"><img src={process.env.PUBLIC_URL + "/images/test-product-img.png"} alt="Termék kép" /></a>
				<div className="products-details">
					<h2>Termék neve</h2>
					<p>- tulajdonság 1</p>
					<p>- tulajdonság 2</p>
					<p>- hosszú tulajdonság321123</p>
				</div>
			</div>
			<div className="products-grid-element">
				<a href="/"><img src={process.env.PUBLIC_URL + "/images/test-product-img.png"} alt="Termék kép" /></a>
				<div className="products-details">
					<h2>Termék neve</h2>
					<p>- tulajdonság 1</p>
					<p>- tulajdonság 2</p>
					<p>- hosszú tulajdonság321123</p>
				</div>
			</div>
			<div className="products-grid-element">
				<a href="/"><img src={process.env.PUBLIC_URL + "/images/test-product-img.png"} alt="Termék kép" /></a>
				<div className="products-details">
					<h2>Termék neve</h2>
					<p>- tulajdonság 1</p>
					<p>- tulajdonság 2</p>
					<p>- hosszú tulajdonság321123</p>
				</div>
			</div>
			<div className="products-grid-element">
				<a href="/"><img src={process.env.PUBLIC_URL + "/images/test-product-img.png"} alt="Termék kép" /></a>
				<div className="products-details">
					<h2>Termék neve</h2>
					<p>- tulajdonság 1</p>
					<p>- tulajdonság 2</p>
					<p>- hosszú tulajdonság321123</p>
				</div>
			</div>
		</div>
	</div>
}

export default Products;