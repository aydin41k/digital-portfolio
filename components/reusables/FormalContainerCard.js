function FormalContainerCard(props) {
    return (
        <div className={props.bgcolor}>
            <div id={props.id} className={`container ${props.bgcolor}`}>
                <h2>{props.title}</h2>
                <hr/>
                <div className={props.extraClass}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default FormalContainerCard;