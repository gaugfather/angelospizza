import React, {Component} from 'react';
import { Modal, Button, Icon , Table, Grid } from 'semantic-ui-react';
import './openingModal.css';

class OpeningModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    };

    this.close = this.close.bind(this);
  }

  close() {
    this.setState({isOpen: false});
  }

  render() {

    return (
      <Modal dimmer={'inverted'} open={this.state.isOpen} onClose={this.close} closeOnDimmerClick={false} closeOnEscape={false}>
        <Modal.Header>
          <p className="welcome1">
            <Icon name="newspaper" style={{marginRight: '12px'}}/>Angelo's Family Pizzeria
            <div style={{fontSize: '10pt', color: 'grey',fontStyle: 'italic', float: 'right', marginTop: '8px'}}>Last updated: 3/11/2023</div>
          </p>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p className="welcome2">
            <span role="img" aria-label="wave">👋</span> Ciao!  We are so excited to be coming back!<br /><br />
            We are working hard on officially reopening our doors to the public soon!
            <br /><br />
            We continue to have frozen pizzas in your favorite stores and local bars.
            <br /><br />
            Please follow our <a href='https://www.facebook.com/Angelos-Family-Pizzeria-140523912649155/' style={{textDecoration:"underline"}} target="_blank" rel="noopener noreferrer">Facebook page</a> for the lastest details! <br /><br />
            <br />-The Angelo's Team <span role="img" aria-label="pizza">🍕</span>
            <br />
            </p>
          </Modal.Description>
        </Modal.Content>
        {
        //  <Modal.Actions>
        //  <Button positive icon='checkmark' labelPosition='right' content="Ok" onClick={this.close} />
        // </Modal.Actions>
      }
      </Modal>
    );
  }

}

export default OpeningModal;
