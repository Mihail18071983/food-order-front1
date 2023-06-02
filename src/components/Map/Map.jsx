import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React, { useState, useContext, useRef, useEffect } from 'react';
import { AddressContext } from 'utils/context';
import { getAllProducts } from 'API/ProductsAPI';
import { geoInstance } from 'API/OrdersAPI';
import { MapWrapper, MapForm } from './Map.styled';

export const MapContainer = () => {
  const [center, setCenter] = useState({ lat: 48.27, lng: 34.58 });
  const [markers, setMarkers] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const { setAddress } = useContext(AddressContext);
  const addressInputRef = useRef(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const getAddressFromLatLng = (lat, lng) => {
    return new Promise((resolve, reject) => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            const address = results[0].formatted_address;
            resolve(address);
          } else {
            reject('No results found');
          }
        } else {
          reject('Geocoder failed due to: ' + status);
        }
      });
    });
  };

  const geocodeAddress = async address => {
    try {
      const response = await geoInstance.get('/json', {
        params: {
          address,
        },
      });

      if (response.data.results.length === 0) {
        throw new Error('No geocoding results found');
      }

      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } catch (error) {
      console.log(`Geocoding error for address "${address}":`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const { data } = await getAllProducts();
        const shopAddresses = data.map(shop => shop.address);
        const coordinatesPromises = shopAddresses.map(address =>
          geocodeAddress(address)
        );
        const coordinates = await Promise.all(coordinatesPromises);
        setAddresses(coordinates);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAddress();
  }, []);

  const handleMapClick = async event => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkers(markers => [...markers, { lat, lng }]);

    try {
      const address = await getAddressFromLatLng(lat, lng);
      document.getElementsByName('address')[0].value = address;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddressSubmit = event => {
    event.preventDefault();
    let address = event.target.elements.address.value;

    if (!address) {
      alert('Please enter a valid address.');
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        setCenter({ lat, lng });

        const addressComponents = results[0].address_components;
        const town = addressComponents.find(component =>
          component.types.includes('locality')
        );
        const street = addressComponents.find(component =>
          component.types.includes('route')
        );
        const formattedTown = town ? town.long_name : '';
        const formattedStreet = street ? street.long_name : '';

        const updatedAddress = `${formattedTown}, ${formattedStreet}`;
        setAddress(updatedAddress);
        addressInputRef.current.value = '';
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
    <MapWrapper>
      <MapForm onSubmit={handleAddressSubmit} style={{display:"flex", justifyContent:"space-between", flexWrap:'wrap', gap:"5px"}}>
        <input
          type="text"
          name="address"
          ref={addressInputRef}
          style={{ marginLeft: '5px', width:'70%' }}
        />
        <button type="submit">Submit</button>
      </MapForm>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '200px' }}
        center={center}
        zoom={8}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
        {addresses.map((address, index) => (
          <Marker key={index} position={address} />
        ))}
      </GoogleMap>
    </MapWrapper>
  );
};
