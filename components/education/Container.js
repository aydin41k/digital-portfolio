import FormalContainerCard from "../reusables/FormalContainerCard";
import FormalUnitCard from "../reusables/FormalUnitCard";

function Educations(props) {
    return (
        <FormalContainerCard
            id="educations"
            title="Education"
            extraClass="experiences"
            bgcolor={props.bgcolor}
        >
            {props.data.map((education, index) => <FormalUnitCard key={index} details={education}/>)}
        </FormalContainerCard>
    );
}

export default Educations;