import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import IndexPage from "../pages/index";
import ProductPage from "../pages/product";
import Contact from "../contact";



class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <IndexPage/>
                        </Route>
                        <Route exact path='/products'>
                            <ProductPage/>
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