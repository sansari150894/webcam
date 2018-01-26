import React from "react";
import { connect } from "react-redux";

function setupWebCam(setStream) {
  const mediaOptions = { audio: false, video: true };

  if (!navigator.getUserMedia) {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
  }

  if (!navigator.getUserMedia) {
    return alert("getUserMedia not supported in this browser.");
  }

  navigator.getUserMedia(mediaOptions, setStream, () => {
    console.log("here");
  });
}

class WebCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stream: null };
    this.setStream = this.setStream.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.toggleState !== prevProps.toggleState) {
      if (this.props.toggleState) {
        setupWebCam(this.setStream);
      } else {
        this.state.stream &&
          this.state.stream.getTracks().forEach(track => track.stop());
      }
    }
  }

  setStream(stream) {
    this.setState({ stream });
  }
  render() {
    return this.state.stream ? (
      <video
        src={window.URL.createObjectURL(this.state.stream)}
        style={{ width: "600px", height: "400px" }}
        id="player"
        autoplay="true"
      />
    ) : (
      "Loading..."
    );
  }
}

export default connect(state => ({ toggleState: state.toggleState }))(
  WebCamera
);
