import React from 'react';
import Phone from '../PhoneValidation/Phone';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const onExitClickHandler = () => {
    props.history.goBack();
  };

  return (
    <div className={classes.promo}>
      <button className={classes.exit} onClick={onExitClickHandler}>
        <div>+</div>
      </button>
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
