import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import CameraControlButton from "./components/CameraControlButton";

class App extends Component {
  render() {
    return <CameraControlButton />;
  }
}

export default App;
