function Header() {
	return (
		<nav className="header-navigation">
			<h1 className="header-logo">ATEXPLASTIK</h1>
			<div className="middle-navigation">
				<a href="##" className="header-nav-item active hover-underline-animation">Kezdőlap</a>
				<a href="#products" className="header-nav-item hover-underline-animation">Termékek</a>
				<a href="#about" className="header-nav-item hover-underline-animation">Rólunk</a>
			</div>
			<button className="contact-button">Kapcsolat</button>
		</nav>
	)
}

export default Header;