import React from 'react';

class Business extends React.Component {
    render() {

        const businessStyle = {
            marginTop: "20px",
            border: "solid"
        };

        return(
            <div style = {businessStyle}>
            <h3>Business</h3>           
            <p>This business plan is to create webapplications and offer a subscribtion. <br />
                The companies can order anything to their website or application <br />
                if they have a subscribtion, then it is a part of the monthly pay, <br /> 
                or they can order anything for a price.</p>      
            </div>
        )
    }
}

export default Business;