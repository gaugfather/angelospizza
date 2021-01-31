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
        <Modal.Header>
          <p className="welcome1">
            <Icon name="newspaper" style={{marginRight: '12px'}}/>COVID-19 Update
            <div style={{fontSize: '10pt', color: 'grey',fontStyle: 'italic', float: 'right', marginTop: '8px'}}>Last updated: 01/31/2021</div>
          </p>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {//   <Icon name='search' />We're hiring Part-time Bartenders! <br />
            //     <span style={{marginLeft: '1em'}}>Apply within! </span>
            //     <Icon name='beer' style={{marginLeft: '6px'}}/><Icon name='beer' style={{marginLeft: '6px'}}/>
            //   </p>
            }
            <p className="welcome2">
              Cheers! <Icon name='beer'/><Icon name='beer'/> Our bar, <b>Tuesdays</b>, is open for dine-in!  Check our hours for details!
              <br /><br />
              We are also OPEN for pick-up and delivery. <span role="img" aria-label="pizza">🍕</span>
              <br /><br />
              Unfortunately, our dining room remains closed as we continue to work toward a plan to keep our employees and guests safe.
              <br /><br />
              Pick-ups and extended free delivery services will continue!
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
                            <div>4pm - 10pm</div>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className="headerColumn label" textAlign="right">
                            <div>Friday & Saturday</div>
                          </Table.Cell>
                          <Table.Cell className="column value">
                            <div>4pm - 11pm</div>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Header>
                    </Table>
                    </Grid>
                </div>
              </div>
              <br />
              Call <a href="tel:715-845-6225">715-845-6225</a> for pick-ups and deliveries!
              <br /><br />
              Angelo's is a family owned business so we appreciate you thinking of us.  Thank you so much for your support during these difficult times.
              <br /><br />
              Check back for more updates! <span role="img" aria-label="pizza">🍕</span>
            </p>
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
