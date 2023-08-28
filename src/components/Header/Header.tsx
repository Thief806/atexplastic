import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const handleClick = (id: string) => (e: MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className="header-navigation">
            {/* Use the Link component for client-side routing */}
            <Link to="/"><h1 className="header-logo">ATEXPLASTIC</h1></Link>
            <div className="middle-navigation">
                <Link to="/" className="header-nav-item active hover-underline-animation">Kezdőlap</Link>

                {/* Continue using buttons for scrolling */}
                <button onClick={handleClick('products')} className="header-nav-item hover-underline-animation">Termékek</button>
                <button onClick={handleClick('customproduct')} className="header-nav-item hover-underline-animation">Személyre szabás</button>
            </div>
            <button onClick={handleClick('contact')} className="contact-button">Kapcsolat</button>
        </nav>
    )
}

export default Header;
