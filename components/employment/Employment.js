const transformDate = date_string => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateObj = new Date(date_string);
    const date = date_string ? monthNames[dateObj.getMonth()] + ' ' + dateObj.getFullYear() : 'current';
    return date;

}
function Employment(props) {
    const {title, specification, location, description, start_date, end_date, link} = props.details;

    const startDate = transformDate(start_date);
    const endDate = transformDate(end_date);

    return (
        <div className="experience row">
            <div className="col-md-4">
                <h4>{title}</h4>
                <p className="experience-period">{startDate} - {endDate}</p>
            </div>
            <div className="col-md-8">
                <p>
                    <strong>{specification}</strong>
                    <span dangerouslySetInnerHTML={{__html: description}}/>
                </p>
                <span className="experience-details">
                    <span className="location">
                        <span className="glyphicon glyphicon-map-marker"></span>
                        {location}
                    </span>
                    {link &&
                        <span>
                            <br/>
                            <span className="link">
                                <span className="glyphicon glyphicon-link"></span>
                                <a href={link} target="_blank" rel="noreferrer">{link}</a>
                            </span>
                        </span>
                    }
                </span>
            </div>
        </div>
    )
}

export default Employment;