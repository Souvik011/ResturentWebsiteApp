import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "Add") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const itemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.item[itemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return { item: updatedItems, totalAmount: newTotalAmount };
  }
  if (action.type === "Remove") {
    const itemIndex = state.item.findIndex((item) => item.id === action.id);

    const existingCartItem = state.item[itemIndex];

    const newTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.item];
      updatedItems[itemIndex] = updatedItem;
    }

    return { item: updatedItems, totalAmount: newTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCartHandler = (item) => {
    dispatchCartAction({
      type: "Add",
      item: item,
    });
  };

  const removeItemtoCartHandler = (id) => {
    dispatchCartAction({
      type: "Remove",
      id: id,
    });
  };

  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemtoCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
