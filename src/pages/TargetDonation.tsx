import React from 'react';
import {makeStyles} from "@material-ui/core";
import UploadFile from "../components/UploadFile";
import InputField from "../components/InputField";
import BlueButton from "../components/BlueButton";

const TargetDonation = () => {
    const classes = useStyles();
    return (
      <div className={classes.container}>
          <div className={classes.elements}>
              <UploadFile/>
          </div>
          <div className={classes.elements}>
              <InputField title={'Название сбора'} placeholder={'Название сбора'}/>
          </div>
          <div className={classes.elements}>
              <InputField title={'Сумма, $'} placeholder={'Сколько нужно собрать?'}/>
          </div>
          <div className={classes.elements}>
              <InputField title={'Цель'} placeholder={'Например, лечение человека'}/>
          </div>
          <div className={classes.elements}>
              <InputField title={'Описание'} placeholder={'На что пойдут деньги и как они кому-то помогут?'}/>
          </div>
          <div className={classes.elements}>
              <InputField title={'Куда получать деньги'} placeholder={''}/>
          </div>
          <div className={classes.elements}>
              <BlueButton title={'Далее'}/>
          </div>

      </div>
    );
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    elements: {
      width: '90%',
      marginTop: '5px'
    },

});

export default TargetDonation
