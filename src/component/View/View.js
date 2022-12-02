import { useEffect, useState } from "react";
import "./View.css";
import { Chart } from "react-google-charts";
import React from "react";

const View = (props) => {
  const [viewHTML1, setViewHTML1] = useState();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let data = {};
  useEffect(() => {
    setViewHTML1(() => view1());
  }, [props.countryData]);

  let view1 = () => {
    try {
      return (
        <div style={{textAlign:"center"}}>
          <h1 style={{ textAlign: "center" }}>
            {props.countryData[0].name.official}
          </h1>
          <div>
            <img
              style={{ maxWidth: "40%", maxHeight: "30%" }}
              src={props.countryData[0].flags.png}
            />
            <img
              style={{  maxHeight: "30%",maxWidth: "40%" }}
              src={props.countryData[0].coatOfArms.png}
            />
          </div>
          <div
            style={{
              display: "inline-flex",
              marginLeft: "10%",
              marginTop: "10%",
            }}
          >
            <h3 style={{ marginLeft: "10%" }}>
              Capital City is {props.countryData[0].capital[0]}
            </h3>
            <h3 style={{ marginLeft: "10%" }}>
              Population is {props.countryData[0].population}
            </h3>
            <h3 style={{ marginLeft: "10%" }}>
              Area is {props.countryData[0].area}
            </h3>
          </div>
        </div>
      );
    } catch (error) {
      return <h1>API ERROR</h1>;
    }
  };
  const [viewChange, setViewChange] = useState(1);
  return (
    <div className="view-container">
      <div className="view-button">
        <button onClick={() => setViewChange(1)}>Country Data</button>
        <button onClick={() => setViewChange(2)}>Game Rule</button>
        <button onClick={() => setViewChange(3)}>Data</button>
        <button onClick={() => setViewChange(4)}>Chart</button>
      </div>
      {viewChange == 1 && viewHTML1}
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
