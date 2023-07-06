import React from 'react';

import image from '../../Images/IMG.jpg';
import CartButton from './CartButton';
import classes from './Header.module.css';

const Header = (props) => {
    return(<div>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <CartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes.mainimage}>
            <img src={image} alt='Delicious Foods ' />
        </div>
    </div>);
};

export default Header;