import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// asagidaki gibi butun app'i store ile provide ediyorum. boylece store icindeki herseyi her yerde import edip kullanabilecegim
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
