import React, { Fragment,useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartVisible,setCartVisible] = useState(false);

  const CartVisibleHandler = () => {
    setCartVisible(true);
  };

  const CartHideHandler = () => {
    setCartVisible(false);
  };

  return (
    <Fragment>
      {cartVisible && <Cart onClose={CartHideHandler}/>}
      <Header onShowCart={CartVisibleHandler}/>
      <Meals />
    </Fragment>
  );
}

export default App;
