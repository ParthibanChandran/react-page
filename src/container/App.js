import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes/Routes";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;
