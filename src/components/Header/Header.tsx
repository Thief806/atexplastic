import React, { MouseEvent } from 'react';

function Header() {
    const handleClick = (id: string) => (e: MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className="header-navigation">
            <a href="/"><h1 className="header-logo">ATEXPLASTIC</h1></a>
            <div className="middle-navigation">
                <a href="/" className="header-nav-item active hover-underline-animation">Kezdőlap</a>
                <button onClick={handleClick('products')} className="header-nav-item hover-underline-animation">Termékek</button>
                <button onClick={handleClick('customproduct')} className="header-nav-item hover-underline-animation">Személyre szabás</button>
            </div>
            <button onClick={handleClick('contact')} className="contact-button">Kapcsolat</button>
        </nav>
    )
}

export default Header;
