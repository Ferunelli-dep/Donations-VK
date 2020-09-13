import React from 'react';
import { makeStyles } from '@material-ui/core';
import InfoButton from '../components/InfoButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import Page from "../components/Page";
import { Link } from "react-router-dom";


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

const DonationType = () => {
  const classes = useStyles();
  return (
      <Page title={'Тип сбора'}>
    <div className={classes.container}>
      <div className={classes.button}>
        <Link to={'/TD'}>
          <InfoButton
            Icon={<FontAwesomeIcon icon={faCrosshairs} />}
            title={'Целевой сбор'}
            description={'Когда есть опредeлённая цель'}
          />
        </Link>
      </div>
      <div className={classes.button}>
        <Link to={'/'}>
          <InfoButton
            Icon={<FontAwesomeIcon icon={faCalendarMinus} />}
            title={'Регулярный сбор'}
            description={'Если помощь нужна ежемесячно'}
          />
        </Link>
      </div>
    </div>
      </Page>
  );
};

export default DonationType;
