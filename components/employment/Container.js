import Employment from "./Employment";

function Employments(props) {
    const employments = props.data.map((employment, index) => {
        return <Employment key={index} details={employment}/>;
    });

    return (
        <div id="experiences" className="container">
            <h2>Employment</h2>
            <hr/>
            <div className="experiences">
                {employments}
            </div>
        </div>
    );
}

export default Employments;