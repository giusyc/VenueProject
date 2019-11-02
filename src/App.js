import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';


class App extends Component {
  render() {
  return (
    <div className="App" style={{height:"1500px"}}>
      <Header/>

      <Element name="Featured">
      <Featured/>
      </Element>

      <Element name="VenueInfo">
      <VenueInfo/>
      </Element>

      <Element name="Highlights">
      <Highlights/>
      </Element>

      <Element name="Pricing">
      <Pricing/>
      </Element>

      <Element name="Location">
      <Location/>
      </Element>

      <Footer/>
    </div>
  );
}
}

export default App;
