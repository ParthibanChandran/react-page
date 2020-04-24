import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes/Routes";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
