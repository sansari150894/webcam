import React, { Component, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import CameraControlButton from "./components/CameraControlButton";
import WebCamera from "./components/WebCamera";
class App extends Component {
  render() {
    return (
      <div>
        <CameraControlButton />
        <WebCamera />
      </div>
    );
  }
}

export default App;
