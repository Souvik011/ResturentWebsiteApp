import classes from './Cart.module.css';
import Modal from '../UI\'s/Modal';

const Cart = (props) => {
    const cartitems = <ul className={classes['cart-items']}>{[
        {
          id: 'm1',
          name: 'Sushi',
          amount: 2,
          price: 22.99,
        }
      ].map((items)=>(<li>{items.name}</li>))}</ul>;
    return (<Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>45.98</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button} >Order</button>
        </div>
        </Modal>);
};

export default Cart;