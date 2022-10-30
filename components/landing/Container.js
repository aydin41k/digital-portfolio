import styles from './styles.module.css';
import {useEffect, useState} from "react";

function Container({data, layout}) {
    const [windowHeightCss, setWindowHeightCss] = useState(0);
    const handleWindowResize = () => {
        setWindowHeightCss(window.innerHeight);
    }

    const addBgImage = layout.hero_bg_img ? `url(${layout.hero_bg_img})` : '';

    const topStyles = {
        height: windowHeightCss,
        backgroundImage: addBgImage,
    }

    useEffect(() => {
        setWindowHeightCss(window.innerHeight);
        window.addEventListener('resize', handleWindowResize, false);
    }, []);

    return (
        <div id="top" className={`jumbotron bg-dark ${styles.jumbotron}`} style={topStyles}>
            <div className="container">
                <h1>{data.first_name} {data.middle_names} {data.last_name}</h1>
                <p className="lead">{data.title}</p>
            </div>

            <div className="overlay"></div>
            <a href="#profile" className="scroll-down">
                <span className="glyphicon glyphicon-chevron-down"></span>
            </a>
        </div>
    );
}

export default Container;