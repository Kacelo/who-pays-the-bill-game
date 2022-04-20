import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from "./context";
import Stage1 from "./components/stage_1";
import Stage2 from "./components/stage_2";
import './App.css';
class App extends Component {
  static contextType = MyContext;

  render() {
    return <div className="App">
      <div className="center-wrapper">
        <h1>Who Pays the bill ? </h1>
        {this.context.state.stage ===1 ? <Stage1/>
        : //conditional rendering
        <Stage2/>}
      </div>
    </div>;
  }
}

export default App;
