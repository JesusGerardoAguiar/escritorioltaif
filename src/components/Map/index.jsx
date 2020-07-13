import React from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import place from '../../../content/assets/icons/place.svg'

const isClient = typeof window !== 'undefined';

function Marker(props) {
	return (
		<Tooltip title={'Ubicación'} placement="top">
			<img src={place} style={{ margin: 0, padding: 0 }}/>
		</Tooltip>
	);
}

export const GoogleMap = (props) => {
  const {
    address,
    googleMapsApiKey
  } = props;
  const lat = parseFloat(address.lat);
  const lng = parseFloat(address.lng);
  return (
      <div style={{ height: '100vh', width: '100%' }}>
        { isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey }}
            defaultCenter={[lat, lng]}
            defaultZoom={14}
          >
            <Marker
              lat={lat}
              lng={lng}
            />
          </GoogleMapReact>
        )}
      </div>
  );
}