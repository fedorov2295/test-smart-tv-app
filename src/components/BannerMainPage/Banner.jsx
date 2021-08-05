import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Banner.module.css';

const Banner = (props) => {
  return (
    <div className={classes.Banner}>
      <p className={classes.title}>
        Исполните мечту вашего малыша!
        <br />
        Подарите ему собаку!
      </p>
      <div className={classes.qrcode}></div>
      <p className={classes.qrok}>Сканируйте QR-код или нажмите ОК</p>
      <Link to="checkout">
        <button className={classes.okbutton}>OK</button>
      </Link>
    </div>
  );
};

export default Banner;
