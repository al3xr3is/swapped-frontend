import React, { useState, useEffect } from 'react';

import './styles.css'

function SearchForm({ onSubmit }) {
  const [device, setDevice] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(parseFloat(latitude));
      setLongitude(parseFloat(longitude));
    },
      (err) => {
        console.log(err);
      },{ timeout: 30000 })
  }, []);

  async function searchSubmi(e) {
    e.preventDefault();
    await onSubmit({ device, latitude, longitude });
  }

  return (
    <form onSubmit={searchSubmi}>
      <div className="input-block">
        <label htmlFor="device">Dispositivo</label>
        <input
          name="device"
          id="device"
          required
          onChange={(e) => setDevice(e.target.value)} />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)} />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)} />
        </div>
      </div>

      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchForm;