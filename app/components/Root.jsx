import React, { Component } from 'react';
import { Map, MarkerGroup } from 'react-d3-map';

// import MapMain from './MapMain';
const data = {
  "type": "Feature",
  "properties": {
    "text": "this is a Point!!!"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [122, 23.5]
  }
}

let width = 700;
let height = 700;
// set your zoom scale
let scale = 1200 * 5;
// min and max of your zoom scale
let scaleExtent = [1 << 12, 1 << 13]
// set your center point
let center = [-74.0803468, 40.7063521];
// set your popupContent
let popupContent = d => d.properties.text;


export default class Root extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1>Map Test</h1>
      
        <Map
          width={width}
          height={height}
          scale={scale}
          scaleExtent={scaleExtent}
          center={center}
        >
          <MarkerGroup
            key={'test-map'}
            data={data}
            popupContent={popupContent}
          />
        </Map>
      
      </div>
    )
  }
}