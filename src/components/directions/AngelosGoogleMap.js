import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class AngelosGoogleMap extends Component {

  render() {
    let latitude = 44.966749;
    let longitude = -89.623733;
    const googleMapApiKey = "AIzaSyCTop8dC7atPa6ZMMZ-wNlbF-mltKZ1keQ";

    const AngelosMap = withScriptjs(withGoogleMap((props) =>
      <GoogleMap defaultZoom={17} defaultCenter={{ lat: latitude, lng: longitude }}>
        <Marker position={{ lat: latitude, lng: longitude }}/>
      </GoogleMap>
    ));

    return (
      <AngelosMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + googleMapApiKey + "&v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
    );
  }
}

export default AngelosGoogleMap;
