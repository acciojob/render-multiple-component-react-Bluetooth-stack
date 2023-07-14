import React, {Component, useState} from "react";
import '../styles/App.css';
import Name from "./Name";
import Desc from "./Desc";

const App = () => {
  return (
    <div id="main">
      <Name/>
      <Desc/>
    </div>
  )
}


export default App;
