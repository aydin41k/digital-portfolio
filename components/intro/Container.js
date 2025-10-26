function Container({data, contact}) {
    return (
        <div className="bg-primary">
            <div id="profile" className="container">
                <h2>Profile</h2>
                <p className="lead">{data.tagline}</p>
                <hr/>
                <div className="row">
                    <div className="col-lg-4">
                        <h3>About me</h3>
                        <p>{data.biography}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={data.profile_picture} alt="Yours Truly" height="246"/>
                    </div>
                    <div className="col-md-4">
                        <h3>Details</h3>
                        <p>
                            <strong>Location:</strong><br/>
                            {data.current_location.city}, {data.current_location.country}<br/>
                            <strong>Email:</strong><br/>
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;