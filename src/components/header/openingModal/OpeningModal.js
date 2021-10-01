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
            <div style={{fontSize: '10pt', color: 'grey',fontStyle: 'italic', float: 'right', marginTop: '8px'}}>Last updated: 09/30/2021</div>
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
            Unfortunately due to our lack of staffing, beginning April 30th, we will be closing our dining room through the summer.
            We will still take larger reservations with an advanced notice.  Please call the restaurant directly at <a href="tel:715-845-6225">715-845-6225</a> for questions or large group reservations.
            <br /><br />Pick-ups and deliveries are available and our bar continues to be open! <Icon name='beer'/>
            <br /><br />In addition, the restaurant will be closed on <b>Mondays</b> to give our employees and family time off. We are hoping this is only temporary.  We are hiring all positions: kitchen, waitstaff, and bartenders.
            <br /><br />Thank you for your understanding, support, and loyalty.  <br /><br />-The Angelo's Team <span role="img" aria-label="pizza">🍕</span>
            <br /><br />
              {
                 // <div style={{lineHeight: '1.5em', paddingBottom: '.5em'}}><Icon name="car" style={{marginRight: '6px'}} size="large" />Due to cost increases in supplies and transportation, there will be a $2.00 delivery charge as of March 1st.  We apologize for any inconvenience.  Thank you for your understanding and continued support!</div>
              }
              <div className="welcome2">
                <Icon name='clock' />Our updated hours <br />
                <div className="updatedHours">
                  <Grid textAlign="left">
                    <Table celled collapsing textAlign="center" unstackable>
                      <Table.Header>
                        <Table.Row>
                          <Table.Cell className="headerColumn label" textAlign="right">
                            <div>Sunday</div>
                          </Table.Cell>
                          <Table.Cell className="column value">
                            <div>4pm - 10pm</div>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className="headerColumn label" textAlign="right">
                            <div>Monday</div>
                          </Table.Cell>
                          <Table.Cell className="column value">
                            <div>Closed</div>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell className="headerColumn label" textAlign="right">
                            <div>Tuesday - Thursday</div>
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
