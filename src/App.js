import React, { Component } from "react";
import "./App.css";
import Header from "./comp/Header";
import route from "./routes";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        {route}
      </div>
    );
  }
}

export default App;
