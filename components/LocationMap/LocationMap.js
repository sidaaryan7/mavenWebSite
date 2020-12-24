import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class LocationMap extends Component {
  state = {
    lat: 28.59384,
    lng: 77.34148,
  };
  l1 = () => {
    this.setState({
      lat: 40.712776,
      lng: -74.005974,
    });
  };
  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
        defaultZoom={13}
      ></GoogleMap>
    ));
    return (
      <div className="">
        <GoogleMapExample
          containerElement={
            <div style={{ height: "500px", width: "100%" }}></div>
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div>
          <button value="1" onClick={this.l1(e)}>
            NEW JERSEY,USA
          </button>
          <button value="2" onClick={this.l2}>
            DELAWARE,USA
          </button>
          <button value="3" onClick={this.l3}>
            LOS ANGELES,USA
          </button>
          <button value="4" onClick={this.l4}>
            NEW DELHI,INDIA
          </button>
          <button value="5" onClick={this.l5}>
            DELAWARE,USA
          </button>
          <button value="6" onClick={this.l6}>
            NOIDA,INDIA
          </button>
        </div>
      </div>
    );
  }
}
export default LocationMap;
