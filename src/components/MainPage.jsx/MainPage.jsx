import React from 'react';
import Banner from '../BannerMainPage/Banner';
import classes from './MainPage.module.css';

const MainPage = (props) => {
  const onBannerOkClickHandler = () => {
    props.history.push('/checkout');
  };

  return (
    <div className={classes.wrapper}>
      <Banner className={classes.banner} onOkHandler={onBannerOkClickHandler} />
    </div>
  );
};

export default MainPage;
