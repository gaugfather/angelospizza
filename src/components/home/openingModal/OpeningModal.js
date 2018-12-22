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
      <Modal dimmer={'inverted'} open={this.state.isOpen} onClose={this.close}>
        <Modal.Header><p className="welcome1"><Icon name='newspaper outline' style={{marginRight: '12px'}}/>Today's News!</p></Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p className="welcome2"><Icon name='clock outline' />We'll be closed Christmas Eve & Christmas Day. Happy Holidays! <Icon name='tree' style={{marginLeft: '6px', marginRight: '6px'}}/></p>          
            <p className="welcome2"><Icon name='search' />We're hiring Part-time Bartenders! <br />   Apply within! <Icon name='beer' style={{marginLeft: '6px', marginRight: '6px'}}/></p>            
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button positive icon='checkmark' labelPosition='right' content="Ok" onClick={this.close} />
        </Modal.Actions>
      </Modal>
    );
  }

}

export default OpeningModal;
