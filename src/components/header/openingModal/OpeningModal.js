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
      <Modal dimmer={'inverted'} open={this.state.isOpen} onClose={this.close}>
        <Modal.Header><p className="welcome1"><Icon name="newspaper" style={{marginRight: '12px'}}/>COVID-19 Update</p></Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {//   <Icon name='search' />We're hiring Part-time Bartenders! <br />
            //     <span style={{marginLeft: '1em'}}>Apply within! </span>
            //     <Icon name='beer' style={{marginLeft: '6px'}}/><Icon name='beer' style={{marginLeft: '6px'}}/>
            //   </p>
            }
            <p className="welcome2">
              Unfortunately due to the new statewide mandate sent by Governor Evers, our dining room and bar is closed. Angelo's will continue to offer free delivery and pick-up for our customers. Please call 715-845-6225 to order.
We will stay committed to our employees and customers. Angelo's is a family owned business so we appreciate you thinking of us. Thank you so much for your support during these difficult times.
Check back for more updates! <span role="img" aria-label="pizza">🍕</span>
            </p>
            <div className="welcome2">
              <Icon name='clock' />Our updated hours <br />
              <div className="updatedHours">
                <Grid textAlign="left">
                  <Table celled collapsing textAlign="center" unstackable>
                    <Table.Header>
                      <Table.Row>
                        <Table.Cell className="headerColumn label" textAlign="right">
                          <div>Sunday - Thursday</div>
                        </Table.Cell>
                        <Table.Cell className="column value">
                          <div>4pm - 9pm</div>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell className="headerColumn label" textAlign="right">
                          <div>Friday & Saturday</div>
                        </Table.Cell>
                        <Table.Cell className="column value">
                          <div>4pm - 10pm</div>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Header>
                  </Table>
                  </Grid>
              </div>
            </div>
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
