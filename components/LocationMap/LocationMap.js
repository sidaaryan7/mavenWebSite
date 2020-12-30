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

  l2 = () => {
    this.setState({
      lat: 40.301498,
      lng: -83.06754,
    });
  };

  l3 = () => {
    this.setState({
      lat: 34.052235,
      lng: -118.243683,
    });
  };

  l4 = () => {
    this.setState({
      lat: 28.613939,
      lng: 77.209023,
    });
  };

  l5 = () => {
    this.setState({
      lat: 40.712776,
      lng: -74.005974,
    });
  };

  l6 = () => {
    this.setState({
      lat: 28.59384,
      lng: 77.34148,
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
        <div className="d-flex justify-content-center buttonContainer">
          <button className="button" value="1" onClick={this.l1}>
            NEW JERSEY,USA
          </button>
          <button className="button" value="2" onClick={this.l2}>
            DELAWARE,USA
          </button>
          <button className="button" value="3" onClick={this.l3}>
            LOS ANGELES,USA
          </button>
          <button className="button" value="4" onClick={this.l4}>
            NEW DELHI,INDIA
          </button>
          <button className="button" value="5" onClick={this.l5}>
            DELAWARE,USA
          </button>
          <button className="button" value="6" onClick={this.l6}>
            NOIDA,INDIA
          </button>
        </div>

        <style jsx>
          {`
             {
              button {
                margin: 3%;
                font-family: Poppins;
                background: none;
               border-left: 3px solid black;
}

 
  
 
  
}


}
.buttonContainer{
  background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0.2) 58%, rgba(0, 0, 0, 0.04) 71%, rgba(0, 0, 0, 0.01) 81%, rgba(0, 0, 0, 0) 89%);
  

}
              }
            }
          `}
        </style>
      </div>
    );
  }
}
export default LocationMap;
