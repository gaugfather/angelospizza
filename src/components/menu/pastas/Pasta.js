import React, { Component } from 'react';
import PropTypes from "prop-types";
import { List} from 'semantic-ui-react';

class Pasta extends Component {
  render() {
    return (
      <List.Item>
        <List.Header>{this.props.pasta.name}</List.Header>
          Small Order......{this.props.pasta.smallPrice} <br />
          Large Order......{this.props.pasta.largePrice}
      </List.Item>
    );
  }
}


Pasta.propTypes = {
    pasta: PropTypes.object.isRequired
};

export default Pasta;
