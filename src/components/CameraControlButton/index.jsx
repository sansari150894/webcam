import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { toggleButton } from "./actions";

class CameraControlButton extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.toggleButton();
  }

  render() {
    const { toggleState } = this.props;
    return (
      <MuiThemeProvider>
        <div style={{ margin: "0 50%" }}>
          <RaisedButton
            raised
            label={toggleState ? "Stop" : "Start"}
            onClick={this.onButtonClick}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    toggleState: state.toggleState
  };
}

export default connect(mapStateToProps, { toggleButton })(CameraControlButton);
