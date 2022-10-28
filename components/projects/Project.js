import styles from './styles.module.css';
import {Fragment, useState} from "react";
import ProjectContact from "./ProjectContact";

function Project(props) {
    const {title, description, image, tags, preview_link, link, about_project, my_role, achievements, contacts} = props.details;

    const projectId = title.toLowerCase().replace(' ', '_').replace(/[^0-9a-z]+/g, '_');

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <Fragment>
            <div className="col-md-6 col-sm-12 col-xs-12" onClick={toggleVisible}>
                <figure className={`effect ${styles.pointer}`}>
                    <img src={image} alt={title} className={styles.image}/>
                    <figcaption>
                        <h3>{title}</h3>
                        <p>
                            <strong>Tags:</strong>
                            <br/>
                            {tags}
                        </p>
                        <span className="icon">
                            <span className="glyphicon glyphicon-new-window"></span>
                        </span>
                    </figcaption>
                </figure>
            </div>
            <div className={`modal fade ${visible ? styles.visible : ''}`} id={projectId} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div className={`modal-dialog ${styles.dialogTransform}`} role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="modalLabel">
                                {title}{link && ':'} {link && <a href={link} target="_blank" rel="noreferrer">{link}</a>}
                            </h4>
                        </div>
                        <div className="modal-body">
                            <div>
                                <h3>About {title}</h3>
                                <div>{description}</div>
                            </div>
                            <div>
                                <h3>My role</h3>
                                <div>{my_role}</div>
                            </div>
                            <div>
                                <h3>Achievements</h3>
                                <div>{achievements}</div>
                            </div>
                            <div>
                                <h3>Contacts for reference</h3>
                                {contacts.map((contact, index) => <ProjectContact key={index} data={contact}/>)}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-modal" onClick={toggleVisible}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Project;