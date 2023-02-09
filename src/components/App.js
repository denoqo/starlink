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
            The satellite positions is real-time data from N2YO API.
            The world map is visualized with D3-geo library.
        </div>
        <div>
            The front-end is build with ReactJS and deployed on AWS Amplify with proxy to N2YO for data.
        </div>
        <Main />
        <Footer />
    </div>
  );
}

export default App;

