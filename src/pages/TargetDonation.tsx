import React from 'react';
import { makeStyles } from '@material-ui/core';
import UploadFile from '../components/UploadFile';
import InputField from '../components/InputField';
import BlueButton from '../components/BlueButton';
import { IField } from '../types/types';

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
});

const TargetDonation = () => {
  const classes = useStyles();

  const fields: IField[] = [
    {
      title: 'Название сбора',
      placeholder: 'Название сбора',
    },
    {
      title: 'Сумма, $',
      placeholder: 'Сколько нужно собрать?',
    },
    {
      title: 'Цель',
      placeholder: 'Например, лечение человека',
    },
    {
      title: 'Описание',
      placeholder: 'На что пойдут деньги и как они кому-то помогут?',
    },
    {
      title: 'Куда получать деньги',
      placeholder: '',
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.elements}>
        <UploadFile />
      </div>
      {fields.map(({ title, placeholder }, id) => {
        return (
          <div className={classes.elements} key={id}>
            <InputField title={title} placeholder={placeholder} />
          </div>
        );
      })}
      <div className={classes.elements}>
        <BlueButton title={'Далее'} />
      </div>
    </div>
  );
};

export default TargetDonation;
