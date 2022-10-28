import Ability from "./Ability";

function AbilitiesCard({data}) {
    const halfLength = Math.ceil(data.length/2);

    return (
        <div className="row">
            <div className="col-md-6">
                <ul className="no-bullets">
                    {data.slice(0,halfLength).map((ability, index) => <Ability key={index} data={ability}/>)}
                </ul>
            </div>
            <div className="col-md-6">
                <ul className="no-bullets">
                    <ul className="no-bullets">
                        {data.slice(halfLength).map((ability, index) => <Ability key={index} data={ability}/>)}
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default AbilitiesCard;