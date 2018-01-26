import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import rootReducer from "./components/CameraControlButton/reducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(rootReducer, {});

const RenderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RenderApp />, document.getElementById("root"));
registerServiceWorker();
