import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToOrder} from './actions/actions';

class Product extends Component {

   /* handleClick(id) {
        this.props.add(id);
    } */

    render() {

        const productStyle = {
            marginTop: "20px",
            border: "solid"
        };

        let productList = this.props.items.map(products => {
            return (
                <div key = {products.id}>
                    <div>
                        <span>{products.title}</span>
                        <span to = '/'><i> : Add to cart</i></span>
                    </div>
                    <div>
                        <p>{products.desc}</p>
                        <p>Price: {products.price}$</p>
                    </div>
                </div>
            )
        })
        return (
            <div style = {productStyle}>
                <h3>The list of products</h3>
                <div>{productList}</div>
                <br/>
            </div>  
        )
    }
}       

const mapStatetofProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addToOrder: (id) => {dispatch(addToOrder(id))}
    }
}

export default connect(mapStatetofProps, mapDispatchtoProps)(Product);