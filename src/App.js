import React, { Fragment } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Description from "./Components/Meals/Description";

function App() {
  return (
    <Fragment>
      <Header />
      <Description />
    </Fragment>
  );
}

export default App;
