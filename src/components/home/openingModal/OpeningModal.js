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
        <Modal.Header><p className="welcome1"><Icon name='bullhorn' style={{marginRight: '12px'}}/>We're Hiring!</p></Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p className="welcome2">Part-time Bartenders!<Icon name='beer' style={{marginLeft: '12px'}}/><Icon name='beer'/></p>
            <p className="welcome2"><Icon name='smile' style={{marginRight: '12px'}}/>Apply within!</p>
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
