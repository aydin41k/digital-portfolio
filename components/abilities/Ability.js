function Ability({data}) {
    const starFilled = Array(data.level).fill(<span className="glyphicon glyphicon-star filled"></span>);
    const starNotFilled = Array(5 - data.level).fill(<span className="glyphicon glyphicon-star"></span>);
    return (
        <li>
            <span className="ability-title">{data.title}</span>
            <span className="ability-score">
                {starFilled}
                {starNotFilled}
            </span>
        </li>
    );
}

export default Ability;