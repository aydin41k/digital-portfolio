import styles from './styles.module.css';

function Container({data, layout}) {
    const addBgImage = layout.hero_bg_img ? {background: `url(${layout.hero_bg_img})`} : {};

    return (
        <div id="top" className={`jumbotron bg-dark ${styles.jumbotron}`} style={addBgImage}>
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