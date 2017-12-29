import React, { Component } from 'react';
import PropTypes from "prop-types";
import { List} from 'semantic-ui-react';

class Salad extends Component {
  render() {
    return (
      <List.Item>
        <List.Header>{this.props.salad.name}......{this.props.salad.price}</List.Header>
          {this.props.salad.description}
      </List.Item>
    );
  }
}


Salad.propTypes = {
    salad: PropTypes.object.isRequired
};

export default Salad;
