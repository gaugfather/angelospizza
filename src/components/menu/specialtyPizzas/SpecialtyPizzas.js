import React, { Component } from 'react';
import { List} from 'semantic-ui-react';
import {specialtyPizzasDto} from './specialtyPizzasDto';
import SpecialtyPizza from './SpecialtyPizza';

class SpecialtyPizzas extends Component {
  render() {
    let specialtyPizzas = [];
    specialtyPizzasDto.forEach((specialtyPizza, index) => {
      specialtyPizzas.push(
        <SpecialtyPizza key={index} specialtyPizza={specialtyPizza} />
      );
    });

    return (
      <section>
        <div id="specialtyPizzas" className="menuCategory">Specialty Pizzas</div>
        <List className="menuList">{specialtyPizzas}</List>
      </section>
    );
  }
}

export default SpecialtyPizzas;
