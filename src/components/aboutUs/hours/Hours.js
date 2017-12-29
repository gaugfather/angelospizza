import React, { Component } from 'react';
import './hours.css';
import {Container, Segment, Table, Grid} from 'semantic-ui-react';
import {openTimes} from './openTimes';

class Hours extends Component {
  render() {
    return (
      <div id="hours">
        <Container>
          <Segment className="mainSegment">
            <div className="atmosphereHeader">Our Hours</div>
            <div className="hoursTable">
              <Table celled unstackable>
                <Table.Header>
                  <Table.Row textAlign="center">
                    <Table.HeaderCell />
                    <Table.HeaderCell>Sunday</Table.HeaderCell>
                    <Table.HeaderCell>Monday</Table.HeaderCell>
                    <Table.HeaderCell>Tuesday</Table.HeaderCell>
                    <Table.HeaderCell>Wednesday</Table.HeaderCell>
                    <Table.HeaderCell>Thursday</Table.HeaderCell>
                    <Table.HeaderCell>Friday</Table.HeaderCell>
                    <Table.HeaderCell>Saturday</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell singleLine className="headerColumn">
                      <div className="hoursHeader">Lunch</div>
                      <div className="hoursNote">* Pickups & <br />
                        Deliveries only
                      </div>
                    </Table.Cell>
                    <Table.Cell />
                    <Table.Cell collapsing>{openTimes.lunch}*</Table.Cell>
                    <Table.Cell collapsing>{openTimes.lunch}*</Table.Cell>
                    <Table.Cell collapsing>{openTimes.lunch}*</Table.Cell>
                    <Table.Cell collapsing>{openTimes.lunch}*</Table.Cell>
                    <Table.Cell collapsing>{openTimes.lunch}*</Table.Cell>
                    <Table.Cell />
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell singleLine textAlign="center" className="headerColumn">Dinner</Table.Cell>
                    <Table.Cell collapsing>{openTimes.sunday}</Table.Cell>
                    <Table.Cell collapsing>{openTimes.monday}</Table.Cell>
                    <Table.Cell collapsing>{openTimes.tuesday}</Table.Cell>
                    <Table.Cell collapsing>{openTimes.wednesday}</Table.Cell>
                    <Table.Cell collapsing>{openTimes.thursday}</Table.Cell>
                    <Table.Cell collapsing>{openTimes.friday}</Table.Cell>
                    <Table.Cell collapsing>{openTimes.saturday}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <div className="hoursTableMobile">
              <Grid textAlign="center">
                <Table celled collapsing textAlign="center" unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">
                        <div>Lunch (M-F)</div>
                        <div style={{fontWeight: 'normal'}}>*Pickups & <br /> Deliveries Only</div>
                      </Table.Cell>
                      <Table.Cell>{openTimes.lunch}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">Sunday</Table.Cell>
                      <Table.Cell>{openTimes.sunday}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">Monday</Table.Cell>
                      <Table.Cell>{openTimes.monday}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">Tuesday</Table.Cell>
                      <Table.Cell>{openTimes.tuesday}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">Wednesday</Table.Cell>
                      <Table.Cell>{openTimes.wednesday}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">Thursday</Table.Cell>
                      <Table.Cell>{openTimes.thursday}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">Friday</Table.Cell>
                      <Table.Cell>{openTimes.friday}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn" textAlign="right">Saturday</Table.Cell>
                      <Table.Cell>{openTimes.saturday}</Table.Cell>
                    </Table.Row>
                  </Table.Header>
                </Table>
            </Grid>
            </div>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default Hours;
