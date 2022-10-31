import styles from './styles.module.css';
import {useEffect, useState} from "react";

function Navbar() {
    const [collapse, setCollapse] = useState(true);
    const [navbarFixed, setNavbarFixed] = useState(false);

    const toggleCollapse = () => {
        setCollapse(!collapse);
    }

    const registerScrollTop = () => {
        const scrollTop = document.documentElement.scrollTop;
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;

        setNavbarFixed((screenWidth > 768) && (scrollTop > screenHeight - 60));
    }

    useEffect(() => {
        registerScrollTop();
        window.addEventListener('scroll', registerScrollTop, false);
    }, []);

    const navbarContainerClasses = `navbar navbar-default ${navbarFixed ? styles.navbarFixed : ''}`;
    const navbarClasses = `navbar-collapse navbar-ex1-collapse ${collapse ? 'collapse' : ''}`;

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