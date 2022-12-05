import { useEffect, useState } from "react";
import {Route,Routes,Link,Navigate} from "react-router-dom"
import View from "../View/View"
import Control from "../Control/Control";
import "./Header.css"
const Header = (props) => {
    

    return (
        <div>
        <nav>
          <Link to  = "/">
          <img
            src={require("../../image/beer.jpg")}
            alt=""
          />
          
          </Link>
          <Link to  = {"/game/"}>
          <h1>Beer Game</h1>
          </Link>
          
          <Link to  = "/about">
              About
          </Link>
        </nav>
        </div>
    );
}

export default Header;
