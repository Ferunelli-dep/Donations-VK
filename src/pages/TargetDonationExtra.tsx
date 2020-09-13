import React from 'react';
import {FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup} from '@material-ui/core';
import TargetDonation from './TargetDonation';
import InputField from '../components/InputField';
import BlueButton from '../components/BlueButton';
import {IField} from "../types/types";
import Page from "../components/Page";

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
      <Page title={'Дополнительно'}>
    <div className={classes.container}>
      <div className={classes.elements}>
        <InputField title={'Автор'} placeholder={'Имя автора'} />
      </div>
      <div className={classes.elements}>
        <div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Сбор завершится</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" /*value={value} onChange={handleChange}*/>
                        <FormControlLabel value="female" control={<Radio />} label="Когда соберем сумму" />
                        <FormControlLabel value="male" control={<Radio />} label="В опредленную дату" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
      </div>
      <div className={classes.elements}>
        <InputField title={'Дата окончания'} placeholder={'Выберите дату'} />
      </div>
      <div className={classes.button}>
        <BlueButton title={'Создать сбор'} />
      </div>
    </div>
</Page>
  );
};

export default TargetDonationExtra;
