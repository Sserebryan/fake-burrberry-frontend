import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from 'react-helmet'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'
import Recommendation from './Recommendation'

const recommendations = [
  {
    src: process.env.PUBLIC_URL + "images/recommendation1.jpg",
    title: "Emroided Hooded",
    price: "27 000 руб"
  },
  {
    src: process.env.PUBLIC_URL + "images/recommendation2.jpg",
    title: "Relaxed Fit Stretch Jeans",
    price: "22 500 руб"
  },
  {
    src: process.env.PUBLIC_URL + "images/recommendation3.jpg",
    title: "Leather and House Check",
    price: "120 000 руб"
  },
  {
    src: process.env.PUBLIC_URL + "images/recommendation4.jpg",
    title: "Leather Wingtip Check",
    price: "46 000 руб"
  }
];

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
        <Recommendation recommendations={recommendations}/>
        <Footer/>
        
      </div>
    );
  }
}

export default App;
