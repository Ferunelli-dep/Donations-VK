import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

interface IProps {
  Icon: React.ReactNode;
  title: string;
  description: string;
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    border: '1px solid #DDD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    textAlign: 'left',
    lineHeight: 1.4,
    padding: '10px 0 10px 14px',
    position: 'relative',
    margin: '6px 0',
    '&:focus': { backgroundColor: '#F5F5F5' },
  },
  icon: {
    color: '#3F8AE0',
    marginRight: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    color: '#6D7885',
    fontSize: 12,
  },
  nextIcon: {
    color: '#AAA',
    position: 'absolute',
    right: 5,
    fontSize: 40,
  },
});

const InfoButton = (props: IProps) => {
  const { Icon, title, description } = props;

  const classes = useStyles();

  return (
    <Button className={classes.root}>
      <span className={classes.icon}>{Icon}</span>
      <div className="main">
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
      <NavigateNextIcon className={classes.nextIcon} />
    </Button>
  );
};

export default InfoButton;
