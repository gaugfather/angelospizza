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
      <Modal dimmer={'inverted'} open={this.state.isOpen} onClose={this.close} closeOnDimmerClick={false}>
        <Modal.Header>
          <p className="welcome1">
            <Icon name="newspaper" style={{marginRight: '12px'}}/>Angelos Pizzeria
            <div style={{fontSize: '10pt', color: 'grey',fontStyle: 'italic', float: 'right', marginTop: '8px'}}>Last updated: 5/24/2022</div>
          </p>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p className="welcome2">
            To Our Valued Angelo’s Patrons,<br /><br />
We our sad to say that after over 50 years, we will be closing our restaurant and only be selling wholesale frozen pizzas. We have given this a lot of thought and made this difficult decision based on age, health, and family. It’s time to move on and give our son, Pete, the opportunity to take our business in a different direction. We are proud of his decision and hope you will continue to support us. We want to thank Wausau and the surrounding areas for their loyalty and support for so many years. This is such a great community!<br /><br />
We will have frozen pizzas in your favorite stores and local bars. Our frozen pizzas will also be available for pick-up at our Wausau location. Current gift certificates can still be used but only at our restaurant location.
<br /><br />Again, thank you for your support! The last day for our bar and delivery service will be Sunday, June 5th. Please follow our <a href='https://www.facebook.com/Angelos-Family-Pizzeria-140523912649155/' style={{textDecoration:"underline"}} target="_blank">Facebook page</a> for locations of our frozen pizzas and hours to pick them up at our Wausau location to follow. <br /><br />
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
