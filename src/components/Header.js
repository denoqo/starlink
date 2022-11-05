import React, {Component} from "react";
import spacex_logo  from '../assets/images/spacex_logo.svg';
import longhorn_logo from '../assets/images/texas-longhorns-logo-svg-vector.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={spacex_logo} className="App-logo" alt="logo" />
                <img src={longhorn_logo} className="longhorn-logo" alt="logo" />
                <p className="title">
                    Starlink Tracker at UT-Austin
                </p>
            </header>
        )
    }
}

export default Header;