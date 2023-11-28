import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Logo from '../../assets/navbar_logo.svg'

export default function NavBar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if(window.innerHeight <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img className="navbar--logo" src={Logo} alt="logo_rs_zomer" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                    <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className="navbar--content">
                            Meus trabalhos
                        </Link>
                    </li>
                    <li>
                    <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="AboutUs"
                        className="navbar--content">
                            Sobre Mim
                        </Link>
                    </li>
                    <li>
                    <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Testimonials"
                        className="navbar--content">
                            Nossos Clientes
                        </Link>
                    </li>
                    <li>
                    <Link onClick={closeMenu} activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact"
                        className="btn btn-outline-primary">
                            Fale conosco
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}