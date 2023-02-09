import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Header from './Header'
import Footer from "./Footer"
import Main from "./Main"
import React from "react";
import Note from "./Note";

function App() {
  return (
    <div className="App">
        <Header />
        <Note />
        <Main />
        <Footer />
    </div>
  );
}

export default App;

