import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as images from './images/carouselImages';

class HomeCarousel extends Component {
  render() {
    return (
      <Carousel emulateTouch autoPlay infiniteLoop transitionTime={500} interval={5500}>
        <div>
          <img src={images.pizza} alt="Pizza" />
        </div>
        <div>
          <img src={images.dining1} alt="Dining 1" />
        </div>
        <div>
          <img src={images.spaghetti} alt="Spaghetti" />
        </div>
        <div>
          <img src={images.pizzaFries} alt="Pizza Fries" />
        </div>
        <div>
          <img src={images.dining2} alt="Dining 2" />
        </div>
        <div>
          <img src={images.bar1} alt="Bar 1" />
        </div>
        <div>
          <img src={images.pizza2} alt="Pizza 2" />
        </div>
        <div>
          <img src={images.game} alt="Game Room" />
        </div>
        <div>
          <img src={images.party} alt="Party Room" />
        </div>
        <div>
          <img src={images.bar2} alt="Bar 2" />
        </div>
      </Carousel>
    );
  }
}

export default HomeCarousel;
