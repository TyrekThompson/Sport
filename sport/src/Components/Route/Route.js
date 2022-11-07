import React from "react";
import Home from '../HomePage/HomePage';
import ProductPage from '../Productpage/Product';
import ContactPage from '../ContactPage/Contact';

import {
  BrowserRouter as Router, Route} from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Product' component={ProductPage} />
        <Route exact path='/Contact' component={ContactPage} />
      </div>
      </Router>
    );
  }
}

export default Routes;