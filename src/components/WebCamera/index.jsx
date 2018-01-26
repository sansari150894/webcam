import React from "react";

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

export default class WebCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stream: null };
    this.setStream = this.setStream.bind(this);
  }

  setStream(stream) {
    this.setState({ stream });
  }
  render() {
    setupWebCam(this.setStream);
    return this.state.stream ? (
      <video
        src={window.URL.createObjectURL(this.state.stream)}
        style={{ width: "200px", height: "300px" }}
        id="player"
        autoplay="true"
      />
    ) : (
      "Loading..."
    );
  }
}
