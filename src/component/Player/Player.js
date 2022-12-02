import { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import View from "../View/View";
import Control from "../Control/Control";
import "./Player.css";
const Player = (props) => {

  const navigate = useNavigate();
  return (
    <div>
      {props.country != null && (
        <div className="container">
          <View 
            whoplay={props.whoPlay}
            countryData={props.countryData}
          />
          <Control
            setWhoPlay={props.setWhoPlay}
            whoPlay={props.whoPlay}
            player={props.player}
            setPlayer={props.setPlayer}
            price={props.price}
            turn={props.turn}
            setTurn={props.setTurn}
            player1={props.player1}
            setPlayer1={props.setPlayer1}
            player2={props.player2}
            setPlayer2={props.setPlayer2}
            player3={props.player3}
            setPlayer3={props.setPlayer3}
            player4={props.player4}
            setPlayer4={props.setPlayer4}
            manu={props.manu}
            setManu={props.setManu}
          />
        </div>
      )}
      {props.country == null &&
          <button style={{height:"100px",marginTop:"20%",marginLeft:"38%"}} onClick={()=>{
            return navigate("/")
          }}>Please Click here to select country you want to play First</button>
      
      }
    </div>
  );
};

export default Player;
