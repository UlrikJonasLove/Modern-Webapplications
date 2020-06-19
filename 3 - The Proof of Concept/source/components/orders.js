/*import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Orders extends React.Component {
    render() {
        let addedProducts = this.props.items.length ? 
        (
            this.props.items.map(item => {
                return(
                     <li key = {item.id}>
                        <div>
                            
                        </div>

                        <div>
                            <span>{item.title}</span>
                            <p>Price: {item.price}$</p>
                            <p>
                            <b>Quantity: {item.quantity}</b>
                            </p>
                            <div>
                                <Link to = '/orders'><i>Add quantity</i></Link>
                                <Link to = '/orders'><i>Remove quantity</i></Link>
                            </div>
                            <button>Remove</button>
                        </div>
                    </li>
                )
            })
        ):

        (
            <p> Nothing yet</p>
        )
        return(
            <div>
                <div>
                    <h5>You have ordered: </h5>
                    <ul>
                        {addedProducts}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedProducts
    }
} 

export default connect(mapStateToProps) (Orders); */