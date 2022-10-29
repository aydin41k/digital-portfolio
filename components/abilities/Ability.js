import Stars from "./Stars";

function Ability({data, index}) {
    const theKey = 'ability_' + index + Math.ceil(Math.random()*1000);

    return (
        <li key={theKey}>
            <span className="ability-title">{data.title}</span>
            <span className="ability-score">
                <Stars count={data.level}/>
            </span>
        </li>
    );
}

export default Ability;