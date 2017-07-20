import React, { Component } from 'react';
import topojson from 'topojson';
import { MapChoropleth } from 'react-d3-map-choropleth';
// import topodata from 'SOMEFILE'

let width = 700, height = 500;
let dataPrecincts = topojson.mesh()


export default class MapMain extends Component {
  constructor() {
    super()
  }

  render() {
    return (  
      <MapChoropleth
        width={width}
        height={height}
        dataPolygon={dataCounties}
        dataMesh={dataStates}
        scale={scale}
        domain={domain}
        domainData={unemploy}
        domainValue={domainValue}
        domainKey={domainKey}
        mapKey={mapKey}
        translate={translate}
        projection={projection}
        showGraticule={true}
        tooltipContent={tooltipContent}
        showTooltip={true}
      />
    )
  }
}