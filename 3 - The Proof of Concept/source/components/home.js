import React from 'react';

class Home extends React.Component {
    render() {
        const homeStyle = {
            marginTop: "20px",
            border: "solid"
        };

        return (
            <div style = {homeStyle}>
                <h1>Home</h1>
                <p>Welcome to us! We are Scoria. A IT company and <br/>
                    we create websites and applications to people!</p>
            </div>
        )
    }
}

export default Home;