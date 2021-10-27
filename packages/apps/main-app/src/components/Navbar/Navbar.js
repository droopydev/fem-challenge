import * as React from 'react';
import * as styles from './Navbar.module.scss';

import {Link} from 'gatsby';

import Logo from '../../images/logo-mobile.svg';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <nav>
                <ul className={styles.lists}>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/blog/">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;