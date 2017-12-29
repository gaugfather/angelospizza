import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {saladsDto} from './saladsDto';
import Salad from './Salad';

class Salads extends Component {
  render() {
    let salads = [];
    saladsDto.forEach((salad, index) => {
      salads.push(
        <Salad key={index} salad={salad} />
      );
    });

    return (
      <section>
        <div id="salads" className="menuCategory">Salads</div>
        <List className="menuList">{salads}</List>
      </section>
    );
  }
}

export default Salads;
