import React, { Component } from 'react';
import './app.css';
import 'typeface-josefin-slab';
import 'typeface-fredericka-the-great';
import Routes from './Routes';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
