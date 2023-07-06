import React, { Fragment } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
