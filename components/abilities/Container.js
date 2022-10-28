import AbilitiesCard from './AbilitiesCard';

function Abilities(props) {
    return (
        <div className={props.bgcolor}>
            <div id="abilities" className="container">
                <h2>Abilities</h2>
                <h3>Languages and Frameworks</h3>
                <AbilitiesCard data={props.computer_languages}/>
                <hr/>
                <h3>Skills and Technologies</h3>
                <AbilitiesCard data={props.skills}/>
                <hr/>
                <h3>Natural Languages</h3>
                <AbilitiesCard data={props.languages}/>
                <hr/>
                <h3>Tools</h3>
                <AbilitiesCard data={props.tools}/>
            </div>
        </div>
    );
}

export default Abilities;