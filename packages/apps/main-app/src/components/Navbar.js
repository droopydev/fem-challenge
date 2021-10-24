import * as React from 'react';
import * as navbarStyles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <header className={navbarStyles.navbar}>
            <div>
                <img></img>
            </div>
            <nav>
                <ul>
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}