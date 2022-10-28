import FormalContainerCard from "../reusables/FormalContainerCard";
import FormalUnitCard from "../reusables/FormalUnitCard";
import {Fragment} from "react";

function Social({bgcolor, active_citizenship, interests}) {
    return (
        <Fragment>
            <FormalContainerCard
                id="interests"
                title="Interests and Hobbies"
                extraClass="experiences"
                bgcolor={bgcolor}
            >
                <h3>Activities</h3>
                {active_citizenship.map((ac, index) => <FormalUnitCard key={index} details={ac}/>)}
                <hr/>
                <h3>Interests</h3>
                {interests.map((interest, index) => <FormalUnitCard key={index} details={interest}/>)}
            </FormalContainerCard>
        </Fragment>
    );
}

export default Social;