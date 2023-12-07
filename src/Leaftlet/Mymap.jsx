import React from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import countries from '../data/countries.json';
import indiastate from '../data/indiastate.json';
import landon from '../data/landon.json';
import './Map.css'
export const Mymap = () => {
  console.log(countries.features);
 
  return (    
    <MapContainer
        zoom={2}
        style={{height:'80vh'}} 
        center={[20, 100]}>
        <h1 style={{color:'rgb(28, 84, 86)', textAlign:'center'}}>Mymap</h1>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | GIS Simplified contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
        <GeoJSON  data={landon} /> 
        <GeoJSON  data={indiastate} /> 

        <GeoJSON data={countries}/> 
    </MapContainer>
  );
};

export default Mymap;