import Employment from "./Employment";

function Employments(props) {
    return (
        <div id="experiences" className="container">
            <h1>Employment</h1>
            <div className="experiences">
                {props.employments.map(employment => <Employment key={employment.id} details={employment}/>)}
            </div>
        </div>
    );
}

export default Employments;