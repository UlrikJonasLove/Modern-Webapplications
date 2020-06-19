import {
    Route,
    Link,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import React from 'react';
import Home from './home';
import Business from './business';
import Prototype from './prototype';
import Idea from './myIdea';
import Contact from './Contact';
import Product from './products';
import { render } from 'react-dom';

class Menu extends React.Component {
    render() {

        const ulStyle = {
            liStyletype: 'none',
            margin: '0px',
            overflow: 'hidden',
            background: 'grey',
            width: '100%',
            padding: '10px',
            float: 'left'
        };
    
        const liStyle = {
            float: 'left',
            margin: '4px',
            marginRight: '20px',
            padding: '4px',
            textDecoration: 'none',
            display: 'block',
        };

        return(
                    <Router>
                    <div>
                <nav>
                    <ul style = {ulStyle}>
                            <li style = {liStyle}>
                                <Link to = '/'>Home</Link>
                            </li>
                            <li style = {liStyle}>
                                <Link to = '/business'>Business</Link>
                            </li>
                            <li style = {liStyle}>
                                <Link to = '/prototype'>Prototype</Link>
                            </li>
                            <li style = {liStyle}>
                                <Link to = '/myIdea'>Our Idea</Link>
                            </li>
                            <li style = {liStyle}>
                                <Link to = '/contact'>Contact</Link>
                            </li>
                            <li style = {liStyle}>
                                <Link to = '/products'>Products</Link>
                            </li>
                    </ul>
                </nav>
                <hr />
                    <Switch>
                        <Route exact path = '/' component = {Home} />
                        <Route path = '/business' component = {Business} />
                        <Route path = '/prototype' component = {Prototype} />
                        <Route path = '/myIdea' component = {Idea} />
                        <Route path = '/contact' component = {Contact} />
                        <Route path = '/products' component = {Product} />
                    </Switch>
                </div>
                </Router>
        )
    }
}

export default Menu;