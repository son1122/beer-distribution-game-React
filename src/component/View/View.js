import { useState } from "react";
import "./View.css";
import { Chart } from "react-google-charts";
import React from 'react';

const View= (props) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let data = {};
  try {
    let tran = props.countryData[0].translations
    let result =[]
    for (var key in tran) {
      result.push([key])
    }
    data = {
      name: props.countryData[0].name.official,
      capital: props.countryData[0].capital[0],
      coatOfArm: props.countryData[0].coatOfArms.png,
      continent: props.countryData[0].continents,
      currencies: props.countryData[0].currencies.Object.key(),
      flags: props.countryData[0].flags.png,
      population: props.countryData[0].population,
      translations: tran
    };
  } catch (error) {
    data = {};
  }
  const [viewChange, setViewChange] = useState(1);
  return (
    <div className="view-container">
      <div className="view-button">
        <button onClick={() => setViewChange(1)}>Country Data</button>
        <button onClick={() => setViewChange(2)}>Game Rule</button>
        <button onClick={() => setViewChange(3)}>Data</button>
        <button onClick={() => setViewChange(4)}>Chart</button>
      </div>
      {viewChange == 1 && (
        <div>
          
        </div>
      )}
      {viewChange == 2 && (
        <div>
          <h1>This is View port 2</h1>
          <Chart
            chartType="ScatterChart"
            data={[
              ["Age", "Weight"],
              [4, 5.5],
              [8, 12],
            ]}
            width="100%"
            height="80%"
            legendToggle
          />
        </div>
      )}
      {viewChange == 3 && (
        <div>
          <h1>This is View port 3</h1>
          <Chart
            chartType="ScatterChart"
            data={[
              ["Age", "Weight"],
              [4, 5.5],
              [8, 12],
            ]}
            width="100%"
            height="50vh"
            legendToggle
          />
        </div>
      )}
      {viewChange == 4 && (
        <div>
          <h1>This is View port 4</h1>
          <Chart
            chartType="ScatterChart"
            data={[
              ["Age", "Weight"],
              [4, 5.5],
              [8, 12],
            ]}
            width="100%"
            height="50vh"
            legendToggle
          />
        </div>
      )}
    </div>
  );
};

export default View;
