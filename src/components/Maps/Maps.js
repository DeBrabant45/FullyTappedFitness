import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Maps.css";
 
const MapsIcon = ({ icon }) => <img src={icon}/>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 42.67,
      lng: -83.36
    },
    zoom: 14
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAD1Ml0UwYHcdCQYzKcwecubN3Au_6xCE8"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapsIcon
            lat={42.678}
            lng={-83.3648277}
            icon={require('../../images/GMButton.svg')}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;