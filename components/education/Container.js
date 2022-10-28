import FormalCard from "../reusables/FormalCard";
import Education from "./Education";

function Educations(props) {
    const educations = props.data.map((education, index) => {
        return <Education key={index} details={education}/>;
    });

    return (
        <FormalCard
            id="educations"
            title="Education"
            extraClass="experiences"
            bgcolor={props.bgcolor}
        >
            {educations}
        </FormalCard>
    );
}

export default Educations;