import React,{ useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI\'s/Modal';
import CartContext from '../../store/Cart-context';
import CartItem from './CartItem';


const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const totalAmount = `$${CartCtx.totalAmount}`;
  const hasItems = CartCtx.item.length>0;

  const CartItemremoveHandler = (id) => {
    CartCtx.removeItem(id);
  };
  const CartItemaddHandler = (item) => {
    CartCtx.addItem({...item, amount:1});
  };
  const cartitems = (
    <ul className={classes['cart-items']}>
      {CartCtx.item.map((item) => (
        <CartItem 
            key = {item.id}
            name={item.name}
            amount = {item.amount}
            price = {item.price}
            onRemove = {CartItemremoveHandler.bind(null , item.id)}
            onAdd = {CartItemaddHandler.bind(null , item)}
        />
      ))}
    </ul>
  );

    return (<Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        { hasItems && <button className={classes.button}>Order</button>}
        </div>
        </Modal>);
};

export default Cart;