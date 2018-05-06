import React, {Component} from 'react';
import { Modal, Button, Icon  } from 'semantic-ui-react'; 

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
      <div>
      <Modal dimmer={'inverted'} open={this.state.isOpen} onClose={this.close}>
        <Modal.Header><Icon name='newspaper' />Latest News!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div className="welcome1"><Icon name='wrench' />Pizza Oven Repairs</div>
            <p className="welcome2" style={{marginBottom: '0px'}}>Unfortunately, we'll be closed <span style={{'fontWeight': 'bold'}}>Monday, May 14 & Tuesday May 15</span> for oven repairs.</p>
            <p className="welcome2">We apologize for the inconvenience!</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button positive icon='checkmark' labelPosition='right' content="Ok" onClick={this.close} />
        </Modal.Actions>
      </Modal>
      </div>
    );
  }
  
}

export default OpeningModal;