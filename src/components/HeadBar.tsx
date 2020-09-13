import { makeStyles, IconButton, ButtonGroup } from '@material-ui/core';
import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import c from 'classnames';
import { Link } from "react-router-dom";

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
    iconButton: {
      width: 30,
      height: 30,
      '&:not(:first-child)': {},
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
    link: {
      textDecoration: 'none',
      color: 'black'
    },
  };
});

const HeadBar = (props: IProps) => {
  const { title, hasPrev = false } = props;
  const classes = useStyles();

  return (
      <Link to={'/'} className={classes.link}>
    <div className={classes.root}>
      {hasPrev && <ArrowBackIosIcon className={classes.backButton} />}
      <ButtonGroup
        className={classes.buttonsWrapper}
        color="inherit"
        variant="contained">
        <IconButton className={classes.iconButton}>
          <MoreHorizIcon className={classes.icon} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <CloseIcon className={c(classes.iconClose, classes.icon)} />
        </IconButton>
      </ButtonGroup>
      {title}
    </div>
      </Link>
  );
};

export default HeadBar;
