import React from "react";
import Worker from './worker';

class Contact extends React.Component {
    render() {

        const contactStyle = {
            marginTop: "20px",
            border: "solid"
        };

        return (
            <div style = {contactStyle}>
                <h1>Contact page</h1>
                <p>This is us, the workers on Scoria!</p>
                <p>Please feel free to contact us</p>
                <hr />
                    <Worker />
             </div>
        )
    }
}

export default Contact;