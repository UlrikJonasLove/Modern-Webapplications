import React from 'react';

class myIdea extends React.Component {
    render() {
        const ideaStyle = {
            marginTop: "20px",
            border: "solid"
        };

        return(
            <div style = {ideaStyle}>
            <h3>Our Idea</h3>
            <p>The idea for this project is to create advanced websites and web applications <br />
               to private persons, to organisations and companies</p>
            </div>
        )
    }
}

export default myIdea;