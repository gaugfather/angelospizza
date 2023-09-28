import React, { Component } from 'react';
import './hours.css';
import {Container, Segment, Table, Grid, Icon} from 'semantic-ui-react';

class Hours extends Component {
  render() {
    return (
      <div id="hours">
        <Container>
          <Segment className="mainSegment">
            <div className="atmosphereHeader">Our Hours</div>
            <div className="atmosphereHeader2">Pickups & Deliveries</div>
            <div className="hoursTable updatedHours">
              <Grid textAlign="center">
                <Table celled collapsing textAlign="center" unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Sunday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>12pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Monday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Tuesday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Wednesday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Thursday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 10pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Friday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 11pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Saturday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>12pm - 11pm</div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Header>
                </Table>
            </Grid>
            </div>
            <div className="hoursTableMobile updatedHours">
              <Grid textAlign="center">
                <Table celled collapsing textAlign="center" unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Sunday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>12pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Monday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Tuesday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Wednesday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 9pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Thursday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 10pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Friday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>4pm - 11pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Saturday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>12pm - 11pm</div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Header>
                </Table>
              </Grid>
            </div>
            <div className="atmosphereHeader2">Our Pub (Tuesdays)<Icon name='beer' style={{marginLeft: '6px'}}/></div>
            <div className="hoursTable updatedHours">
              <Grid textAlign="center">
                <Table celled collapsing textAlign="center" unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Sunday - Thursday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>Opening - 10pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Friday - Saturday</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>Opening - 12am</div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Header>
                </Table>
            </Grid>
            </div>
            <div className="hoursTableMobile updatedHours">
              <Grid textAlign="center">
                <Table celled collapsing textAlign="center" unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Sun - Thurs</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>Open - 10pm</div>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="headerColumn label" textAlign="right">
                        <div>Fri - Sat</div>
                      </Table.Cell>
                      <Table.Cell className="column value">
                        <div>Open - 12am</div>
                      </Table.Cell>
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
