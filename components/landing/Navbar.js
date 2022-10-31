import styles from './styles.module.css';
import {useEffect, useState} from "react";

function Navbar() {
    const [collapse, setCollapse] = useState(true);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    const toggleCollapse = () => {
        setCollapse(prevState => {
            return {...prevState, collapse: !collapse};
        })
    }

    const registerScrollTop = () => {
        const scrollTop = document.documentElement.scrollTop;
        const screenHeight = window.innerHeight;

        setNavbarFixed((scrollTop > screenHeight - 60));
    }

    useEffect(() => {
        registerScrollTop();
        window.addEventListener('scroll', registerScrollTop, false);
    }, []);

    const navbarContainerClasses = `navbar navbar-default ${navbarFixed && styles.navbarFixed}`;
    const navbarClasses = `${collapse} navbar-collapse navbar-ex1-collapse`;

    return (
        <nav className={navbarContainerClasses} id="navbar-example" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" onClick={toggleCollapse}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            <div className={navbarClasses}>
                <ul className="nav navbar-nav">
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#abilities">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experiences">Background</a></li>
                    <li><a href="#interests">Social</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar