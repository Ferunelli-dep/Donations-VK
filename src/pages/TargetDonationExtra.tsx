import React from 'react';
import { makeStyles } from '@material-ui/core';
import TargetDonation from './TargetDonation';
import InputField from '../components/InputField';
import BlueButton from '../components/BlueButton';
import {IField} from "../types/types";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  elements: {
    width: '90%',
    marginTop: '5px',
  },
  button: {
    width: '90%',
    position: 'absolute',
    bottom: 20,
  },
});

const TargetDonationExtra = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.elements}>
        <InputField title={'Автор'} placeholder={'Имя автора'} />
      </div>
      <div className={classes.elements}>
        <div>
            
        </div>
      </div>
      <div className={classes.elements}>
        <InputField title={'Дата окончания'} placeholder={'Выберите дату'} />
      </div>
      <div className={classes.button}>
        <BlueButton title={'Создать сбор'} />
      </div>
    </div>
  );
};

export default TargetDonationExtra;
