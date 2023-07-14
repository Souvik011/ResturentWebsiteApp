import React,{createContext} from "react";

const CartContext = createContext({
    item:[],
    totalAmount:[],
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;

