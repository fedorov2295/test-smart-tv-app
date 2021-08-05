import React from 'react';
import Banner from '../BannerMainPage/Banner';
import classes from './MainPage.module.css';

const MainPage = (props) => {
  return (
    <div className={classes.wrapper}>
      <Banner className={classes.banner} />
    </div>
  );
};

export default MainPage;
