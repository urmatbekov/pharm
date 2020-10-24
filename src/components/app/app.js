import React, {Component} from 'react';
import Index from "../pages/index";
import Products from "../pages/products";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Contact from "../contact";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Index/>
                        </Route>
                        <Route exact path='/products'>
                            <Products/>
                        </Route>
                        <Route exact path='/contacts'>
                            <Contact/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;