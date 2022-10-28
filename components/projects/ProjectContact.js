function ProjectContact(props) {
    const {name, position, phone, email} = props.data;
    return (
        <div>
            <span className="contact-field-caption">Name:</span><strong>{name}</strong><br/>
            <span className="contact-field-caption">Position:</span><strong>{position}</strong><br/>
            {phone && `<span class="contact-field-caption">Phone:</span><strong>${phone}</strong><br/>`}
            {email && `<span class="contact-field-caption">Email:</span><a href="mailto:${email}"><strong>${email}</strong></a>`}
        </div>
    );
}

export default ProjectContact;