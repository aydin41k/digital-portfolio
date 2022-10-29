import {Fragment} from "react";

function Stars({count}) {
    const stars = [];
    for(let i=1; i<=5; i++) {
        let filled = (i <= count) ? 'filled' : '';
        stars.push(<span key={i} className={`glyphicon glyphicon-star ${filled}`}></span>)
    }

    return (
        <Fragment>
            {stars}
        </Fragment>
    )
}

export default Stars;