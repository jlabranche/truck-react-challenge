import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import pin from "./pin.png";
import { Link } from "react-router-dom";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.78561008636915,
      lng: -122.40815476434545
    },
    zoom: 11,
    locations: []
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <script>
        </script>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.locations && this.props.locations.map(i => {
            return (
              <Link to={"/" + i.applicant} key={i.id} lat={i.latitude} lng={i.longitude}>
                <img style={markerStyle} src={pin} alt="pin" />
              </Link>
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

