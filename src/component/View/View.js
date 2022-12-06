import { useEffect, useState } from "react";
import "./View.css";
import { Chart } from "react-google-charts";
import React from "react";
import { data, options } from "../Chart/Chart";

const View = (props) => {
  const [dataGraph,setDataGraph] = useState([])
  // setValue([...value, newvalue])
  const options = {
    chart: {
      title: "Player Realtime Performance Chart",
      subtitle: "stock cost 1 , backlog 5",
    },
  };
  const currentArray = [1, 120, 0 , 12]
  const currentArray2 = [2, 12, 130 , 30];
  const currentArray3 = [3, 250, 10 , 150];
  useEffect(() => {
    switch (props.player) {
      case 1:
        setDataGraph ([
          ["Turn Play(WEEK)", "Stock", "Backlog", "Cost"],
          currentArray,
          currentArray2,
          currentArray3,
          
        ])
        break;
      case 2:
        setDataGraph ([
          ["Turn Play(WEEK)", "Stock", "Backlog", "Cost"],
          currentArray,
          currentArray2,
          currentArray3,
          
        ])
        break;
      case 3:
        setDataGraph ([
          ["Turn Play(WEEK)", "Stock", "Backlog", "Cost"],
          currentArray,
          currentArray2,
          currentArray3,
          
        ])
        break;
      case 4:
        setDataGraph ([
          ["Turn Play(WEEK)", "Stock", "Backlog", "Cost"],
          currentArray,
          currentArray2,
          currentArray3,
          
        ])
        break;
      default:
        setDataGraph ([
          ["Turn Play(WEEK)", "Stock", "Backlog", "Cost"],
          currentArray,
          currentArray2,
          currentArray3,
          
        ])
        break;
    }
  }, [props.player]);

  const [viewHTML1, setViewHTML1] = useState();
  const [viewHTML2, setViewHTML2] = useState();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  let data = {};
  useEffect(() => {
    setViewHTML1(() => view1());
    setViewHTML2(() => view2());
  }, [props.countryData, props.countryHoliday]);

  let view1 = () => {
    try {
      return (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ textAlign: "center" }}>
            {props.countryData[0].name.official}
          </h1>
          <div>
            <img
              style={{ maxWidth: "40%", maxHeight: "30%" }}
              src={props.countryData[0].flags.png}
            />
            <img
              style={{ maxHeight: "30%", maxWidth: "40%" }}
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
              Population is {numberWithCommas(props.countryData[0].population)}
            </h3>
            <h3 style={{ marginLeft: "10%" }}>
              Area is {numberWithCommas(props.countryData[0].area)}
            </h3>
          </div>
        </div>
      );
    } catch (error) {
      return <h1>API ERROR</h1>;
    }
  };

  let view2 = () => {
    let list = props.countryHoliday.map((loop, index) => {
      return (
        <div>
          <h2>
            {index + 1}. {loop.name}
          </h2>
          <h3>{loop.date}</h3>
          <h3>{loop.type}</h3>
        </div>
      );
    });
    try {
      return <div style={{overflow:"auto" , marginLeft:"50px"}}>{list}</div>;
    } catch (error) {
      return <h1>API ERROR</h1>;
    }
  };
  let viewHTML3 = () => {
    return (
      <div>
        <h2>Test</h2>
      </div>
    );
  };

  const [viewChange, setViewChange] = useState(1);
  return (
    <div className="view-container">
      <div className="view-button">
        <button onClick={() => setViewChange(1)}>Country Data</button>
        <button onClick={() => setViewChange(2)}>Holiday</button>
        <button onClick={() => setViewChange(3)}>Game Rule</button>
        <button onClick={() => setViewChange(4)}>Performance Chart</button>
      </div>
      {viewChange == 1 && viewHTML1}
      {viewChange == 2 && viewHTML2}
      {viewChange == 3 && (
        <div>
          <h2>Beer Distribution Game</h2>
          <h4>1. order beer for operation by put number and press submit</h4>
          <h4>2. Manage Your stock to be enough for operation</h4>
          <h4>3. Minize operation cost</h4>
          <h4>** at the end of turn cost of stock = 1 **</h4>
          <h4>** at the end of turn cost of backlog = 5 **</h4>
        </div>
      )}
      {viewChange == 4 && (
        <div>
          <Chart
            style={{ width: "45vw", height: "90%", marginTop: "10%" }}
            chartType="Line"
            width="100%"
            height="400px"
            data={dataGraph}
            options={options}
          />
        </div>
      )}
    </div>
  );
};

export default View;
