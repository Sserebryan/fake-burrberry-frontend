import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet'
import Header from './Header'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>

          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
        </Helmet>
        <Header/>
        <Product/>
        
      </div>
    );
  }
}

export default App;
