import { makeStyles } from '@material-ui/core';
import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import c from 'classnames';

interface IProps {
  title: string;
  hasPrev?: boolean;
}

const useStyles = makeStyles((theme) => {
  return {
    backButton: {
      position: 'absolute',
      left: 10,
      color: '#3F8AE0',
    },
    buttonsWrapper: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: 5,
      backgroundColor: theme.palette.grey[300],
      padding: 5,
      marginTop: -5,
      borderRadius: 10,
    },
    icon: {
      color: 'white',
      margin: '0 5px',
    },
    iconClose: {
      marginLeft: 5,
      position: 'relative',
    },
    root: {
      position: 'relative',
      maring: '0 auto',
      fontWeight: 700,
      fontSize: 22,
      width: '100%',
      textAlign: 'center',
      padding: '20px 0',
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
    },
  };
});

const HeadBar = (props: IProps) => {
  const { title, hasPrev = false } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {hasPrev && <ArrowBackIosIcon className={classes.backButton} />}
      <div className={classes.buttonsWrapper}>
        <MoreHorizIcon className={classes.icon} />
        <CloseIcon className={c(classes.iconClose, classes.icon)} />
      </div>
      {title}
    </div>
  );
};

export default HeadBar;
