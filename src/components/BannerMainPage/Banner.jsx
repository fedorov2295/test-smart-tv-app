import React from 'react';
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
      <button className={classes.okbutton} onClick={props.onOkHandler}>
        OK
      </button>
    </div>
  );
};

export default Banner;
