const transformDate = date_string => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObj = new Date(date_string);
    return date_string ? monthNames[dateObj.getMonth()] + ' ' + dateObj.getFullYear() : 'current';
}

function FormalUnitCard(props) {
    const {title, specification, location, description, start_date, end_date, level, date} = props.details;

    const startDate = transformDate(start_date);
    const endDate = transformDate(end_date);
    const dateDate = transformDate(date)

    return (
        <div className="experience row">
            <div className="col-md-4">
                <h4>{title}</h4>
                {start_date && <div className="experience-period">{startDate} - {endDate}</div>}
            </div>
            <div className="col-md-8">
                {specification && (<strong>{specification}{level && `, ${level}`}</strong>)}
                <span className="hidden-phone"></span>
                <span className="experience-details">
                    {location && <span className="location">
                        <span className="glyphicon glyphicon-map-marker"></span>
                        {location}
                    </span>}
                </span>
                {description}
                {date && <div className="interest-date">{dateDate}</div>}
            </div>
        </div>
    );
}

export default FormalUnitCard;