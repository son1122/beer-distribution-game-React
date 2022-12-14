import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import View from "../View/View";
import Control from "../Control/Control";
import "./Player.css";
import axios from "axios";

const Player = (props) => {
    const [his1, setHis1] = useState([])
    const [his2, setHis2] = useState([])
    const [his3, setHis3] = useState([])
    const [his4, setHis4] = useState([])


    useEffect(() => {
        if (props.country != null && props.countryData[0] == undefined) {
            // console.log(props.country);
            let options = {
                method: "GET",
                url: "https://holidays-by-api-ninjas.p.rapidapi.com/v1/holidays/",
                headers: {
                    "X-RapidAPI-Key": "9fb954e0d0msh1fcc78ff571276ap1e3d63jsnf114407345b7",
                    "X-RapidAPI-Host": "holidays-by-api-ninjas.p.rapidapi.com",
                },
                params: {
                    country: props.country,
                    year: 2021,
                },
            };
            let data = [];
            axios
                .request(options)
                .then(function (response) {
                    // console.log(response.data);
                    props.setCountryHoliday(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
            options = {
                method: "GET",
                url: "https://restcountries.com/v3.1/alpha",
                headers: {},
                params: {
                    codes: props.country,
                },
            };
            data = [];
            axios
                .request(options)
                .then(function (response) {
                    // console.log(response.data);
                    props.setCountryData(response.data);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    }, [])


    const navigate = useNavigate();
    return (
        <div>
            {props.country != null && (
                <div className="container">
                    <View
                        whoplay={props.whoPlay}
                        countryData={props.countryData}
                        searchCountry={props.searchCountry}
                        setCountryData={props.setCountryData}
                        setCountryHoliday={props.setCountryHoliday}
                        countryHoliday={props.countryHoliday}
                        player={props.player}
                        player1={props.player1}
                        player2={props.player2}
                        player3={props.player3}
                        player4={props.player4}
                        turn={props.turn}
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
                        his1={his1}
                        his2={his2}
                        his3={his3}
                        his4={his4}
                        setHis1={setHis1}
                        setHis2={setHis2}
                        setHis3={setHis3}
                        setHis4={setHis4}
                    />
                </div>
            )}
            {props.country == null &&
                <button style={{height: "100px", marginTop: "20%", marginLeft: "38%"}} onClick={() => {
                    return navigate("/")
                }}>Please Click here to select country you want to play First</button>

            }
        </div>
    );
};

export default Player;
