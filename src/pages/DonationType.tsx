import React from 'react';
import { makeStyles } from '@material-ui/core';
import InfoButton from '../components/InfoButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';

const DonationType = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.button}>
        <InfoButton
          Icon={<FontAwesomeIcon icon={faCrosshairs} />}
          title={'Целевой сбор'}
          description={'Когда есть опредeлённая цель'}
        />
      </div>
      <div className={classes.button}>
        <InfoButton
          Icon={<FontAwesomeIcon icon={faCalendarMinus} />}
          title={'Регулярный сбор'}
          description={'Если помощь нужна ежемесячно'}
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '300px',
  },
  button: {
    width: '90%',
  },
});

export default DonationType;
