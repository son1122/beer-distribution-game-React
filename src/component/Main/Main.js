import { useEffect, useState } from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Main = (props) => {
  const navigate = useNavigate();
  const [infoPage, setInfoPage] = useState(1);
  let maxPage = 4;

  


  let list = props.countryCode.map((loop, index) => {
    return (
      <p
        style={
          ((loop.code.split("").includes(props.searchCountry.toUpperCase()) ||
            loop.code == props.searchCountry.toUpperCase()) &&
          props.searchCountry != "")||props.searchCountry == ""
            ? {}
            : { display: "none" }
        }
        key={loop.code}
        onClick={() => {
          props.setCountry(loop.code);
        }}
      >
        {"code " + loop.code + " : " + loop.name}
      </p>
    );
  });
  return (
    <div className="main-container">
      <div className="info">
        <div className="info-page">
          <p
            onClick={() => {
              setInfoPage(infoPage <= 1 ? maxPage : infoPage - 1);
            }}
            className="previous round"
          >
            &#8249;
          </p>
          <h1 style={{ textAlign: "center" }}>
            &emsp;&emsp;INFORMATION&emsp;&emsp;
          </h1>
          <p
            onClick={() => {
              setInfoPage(infoPage >= maxPage ? 1 : infoPage + 1);
            }}
            className="next round"
          >
            &#8250;
          </p>
        </div>
        {infoPage == 1 && (
          <div>
            <h2 style={{ textAlign: "center" }}>BEER Distribution Game</h2>
            <h3 style={{ marginLeft: "6%", marginRight: "10%" }}>
              &emsp;&emsp;&emsp;&emsp;&emsp; Beer Distribution Game is Financial
              Simulation Game that simulate product distribution across 4 player
              to simulate and show the problem in Distribution System. This
              Website aim to improve Beer Game with more function user to gain
              more fun with adaptive Simulation game you can find source code{" "}
              <a
                target="_blank"
                href="https://github.com/son1122/beer-distribution-game-React"
              >
                HERE
              </a>
              If you have any Suggestion or anything Please let me know.Thank
              you every one for your attention
            </h3>
            <img src="https://zensimu.com/assets/static/beergame-header-visual.06976bc.0a1ff2bb7cc7457c115dd1b15a568c0c.png" />
          </div>
        )}
        {infoPage == 2 && (
          <div>
            <h2 style={{ textAlign: "center" }}>Feature List</h2>
            <ul style={{ marginLeft: "10%" }}>
              <li style={{ fontSize: "1.2em" }}>
                Playable Beer Distribution Game
              </li>
              <li style={{ fontSize: "1.2em" }}>
                Sale Number That Reatrailer receive is affect by Country Event
                and Holiday
              </li>
              <li style={{ fontSize: "1.2em" }}>
                Sale Number That Reatrailer receive True random
              </li>
              <li style={{ fontSize: "1.2em" }}>
                48 Turn Game = year and 1 Turn = 1 weak of the month
              </li>
              <li style={{ fontSize: "1.2em" }}>4 Player Local Game</li>
              <li style={{ fontSize: "1.2em" }}>
                Each Player COST of operation
              </li>
              <li style={{ fontSize: "1.2em" }}>
                Chart , data and Summary of Each Player
              </li>
            </ul>
            <h2 style={{ textAlign: "center" }}>Functional List </h2>
            <ul style={{ marginLeft: "10%" }}>
              <li style={{ fontSize: "1.2em" }}>
                true random number generator (TRNG) from{" "}
                <a target="_blank" href="https://www.random.org/">
                  APIs
                </a>
              </li>
              <li style={{ fontSize: "1.2em" }}>
                React Chart from Google
                <a target="_blank" href="https://www.react-google-charts.com/">
                  Chart
                </a>
              </li>
              <li style={{ fontSize: "1.2em" }}>
                Holiday DATA by api-ninjas.com
                <a target="_blank" href="https://api-ninjas.com/api/holidays">
                  APIs
                </a>
              </li>
              <li style={{ fontSize: "1.2em" }}>
                Country DATA by restcountries.com
                <a
                  target="_blank"
                  href="https://restcountries.com/v3.1/alpha?codes=th"
                >
                  APIs
                </a>
              </li>
            </ul>
            <p style={{ textAlign: "center", marginLeft: "10%" }}>
              **Thank you every developer who contribute and provide all data
              and API**
            </p>
          </div>
        )}
        {infoPage == 3 && (
          <div>
            <h2 style={{ textAlign: "center" }}>How to Play a Game</h2>
            <h3 style={{ marginLeft: "6%", marginRight: "10%" }}>
              &emsp;&emsp;&emsp;&emsp;&emsp; Step
            </h3>
          </div>
        )}
        {infoPage == 4 && (
          <div>
            <h2 style={{ textAlign: "center" }}>Curios about RESULT ?? ME 2</h2>
            <h3 style={{ marginLeft: "6%", marginRight: "10%" }}>
              &emsp;&emsp;&emsp;&emsp;&emsp; Result
            </h3>
          </div>
        )}
      </div>
      <div className="country">
        <h2>Country List For you to Select</h2>
        {props.country == null && (
          <input
            onChange={(e) => {
              console.log(e.target.value);
              props.setSearchCountry(e.target.value);
            }}
            type="text"
            id="search"
            name="Search Country"
            placeholder="Search Country"
          ></input>
        )}
        {props.country == null && <div className="country-list">{list}</div>}
        {props.country != null && <h2>Your country code is {props.country}</h2>}
        {props.country != null && (
          <button
            onClick={() => {
              props.setCountry(null);
            }}
            style={{ width: "30%", height: "25%" }}
          >
            Press this to clear
          </button>
        )}
        {props.country != null && (
          <button
            onClick={() => {
              navigate("/game")
                
            }}
            style={{ width: "30%", height: "25%" }}
          >
            Start !!!!!
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
