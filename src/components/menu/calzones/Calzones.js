import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {calzonesDto} from './calzonesDto';

class Calzones extends Component {
  render() {
    let calzones = [];
    calzonesDto.calzones.forEach((calzone, index) => {
      calzones.push(
        <List.Item key={index}>
          <List.Header>{calzone.name}......{calzone.price}</List.Header>
        </List.Item>
      );
    });

    return (
      <section>
        <div id="calzones" className="menuCategory">Calzones</div>
        <div className="categoryDescription">{calzonesDto.description}</div>
        <List className="menuList">{calzones}</List>
      </section>
    );
  }
}

export default Calzones;
