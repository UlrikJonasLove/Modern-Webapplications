import React from 'react';

class Prototype extends React.Component {
    render() {

        const prototypeStyle = {
            marginTop: "20px",
            border: "solid"
        };


        return (
        <div style = {prototypeStyle}>
            <h3>Prototype</h3>
                <p>This website is still a prototype. <br />
                    It is far from done, and it needs a bit more work <br/>
                    We are going to add a kind of shopping cart. </p>
        </div>
        )
    }
}

export default Prototype;