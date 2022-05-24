import React, { Component } from 'react';
import Products from './Products';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Hompage from './Homepage';
import ProductDetail from './ProductDetail';

class EX16_1 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Hompage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default EX16_1;
