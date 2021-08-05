import React from 'react';
import Phone from '../PhoneValidation/Phone';
import classes from './Checkout.module.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className={classes.promo}>
      <Link to="/">
        <button className={classes.exit}>
          <div>+</div>
        </button>
      </Link>
      <Phone />
      <div className={classes.qrwrapper}>
        <label>
          Сканируйте QR-код
          <br /> ДЛЯ ПОЛУЧЕНИЯ
          <br /> ДОПОЛНИТЕЛЬНОЙ
          <br /> ИНФОРМАЦИИ
        </label>
        <div className={classes.qrcode}></div>
      </div>
    </div>
  );
};

export default Checkout;
