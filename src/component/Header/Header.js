import {Link} from "react-router-dom"
import "./Header.css"

const Header = (props) => {


    return (
        <div>
            <nav>
                <Link to="/">
                    <img
                        src={require("../../image/beer.jpg")}
                        alt=""
                    />

                </Link>
                <Link to={"/game/"}>
                    <h1>Beer Game</h1>
                </Link>

                <Link to="/about">
                    About
                </Link>
            </nav>
        </div>
    );
}

export default Header;
