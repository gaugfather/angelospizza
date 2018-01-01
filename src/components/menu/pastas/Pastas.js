import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {pastasDto} from './pastasDto';
import Pasta from './Pasta';

class Pastas extends Component {
  render() {
    let pastas = [];
    pastasDto.dinners.forEach((pasta, index) => {
      pastas.push(
        <Pasta key={index} pasta={pasta} />
      );
    });

    return (
      <section>
        <div id="pastas" className="menuCategory">Pasta Dinners</div>
        <div className="categoryDescription">{pastasDto.description}</div>
        <List className="menuList">{pastas}</List>
      </section>
    );
  }
}

export default Pastas;
