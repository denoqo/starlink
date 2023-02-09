import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Header from './Header'
import Footer from "./Footer"
import Main from "./Main"
import React from "react";

function App() {
  return (
    <div className="App">
        <Header />
        <div>
            Starlink tracker is a front-end project that
            visualize the real-time positions of
            running satellites around the earth right now.
        </div>
        <div>
            The real-time satellite positions is from N2YO API.
            The world map is visualized with D3-geo.
            The front-end is build with ReactJS and deployed on AWS Amplify.

        </div>

        <div>
            Click "Find Satellite" -> Select "STARLINKs" -> Click "Track" -> Selected Satellites (represented by dots) with show up on the world map and moving.
        </div>
        <Main />
        <Footer />
    </div>
  );
}

export default App;

