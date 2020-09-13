import React from 'react';
import BlueButton from '../components/BlueButton';
import { makeStyles } from '@material-ui/core';

const DonationList = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <span>
          У вас пока нет сборов, <br /> Начните доброе дело
        </span>
      </div>
      <div className={classes.blueButton}>
        <BlueButton title={'Создать сбор'} />
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  blueButton: {
    marginTop: 20,
  },
  text: {
    marginTop: '300px',
    color: 'Grey',
  },
});

export default DonationList;
