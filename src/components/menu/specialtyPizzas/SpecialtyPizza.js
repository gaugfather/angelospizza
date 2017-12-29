import React, { Component } from 'react';
import PropTypes from "prop-types";
import { List} from 'semantic-ui-react';

class SpecialtyPizza extends Component {
  render() {
    return (
      <List.Item>
        <List.Header>{this.props.specialtyPizza.name}</List.Header>
          {this.props.specialtyPizza.description}
          <List.Item>
            <i>Small (12"")</i>......{this.props.specialtyPizza.smallPrice} <br />
            <i>Medium (14"")</i>......{this.props.specialtyPizza.mediumPrice} <br />
            <i>Large (16"")</i>......{this.props.specialtyPizza.largePrice}
          </List.Item>
      </List.Item>
    );
  }
}


SpecialtyPizza.propTypes = {
    specialtyPizza: PropTypes.object.isRequired
};

export default SpecialtyPizza;
