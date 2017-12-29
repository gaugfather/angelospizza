import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {appetizersDto} from './appetizersDto';
import Appetizer from './Appetizer';

class Appetizers extends Component {
  render() {
    let appetizers = [];
    appetizersDto.forEach((appetizer, index) => {
      appetizers.push(
        <Appetizer key={index} appetizer={appetizer} />
      );
    });

    return (
      <section>
        <div id="appetizers" className="menuCategory">Appetizers</div>
        <List className="menuList">{appetizers}</List>
      </section>
    );
  }
}

export default Appetizers;
