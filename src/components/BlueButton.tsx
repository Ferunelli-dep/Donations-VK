import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

interface IProps {
  title: string;
  inline?: boolean;
}

const useStyles = makeStyles((theme) => {
  return {
    root: (props: IProps) => ({
      backgroundColor: '#4986CC',
      borderRadius: 8,
      color: '#FFF',
      display: props.inline ? 'block' : 'inline-block',
      fontWeight: 500,
      width: props.inline ? undefined : '100%',
      textTransform: 'none',
    }),
  };
});

const BlueButton = (props: IProps) => {
  const { title } = props;
  const classes = useStyles(props);

  return <Button className={classes.root}>{title}</Button>;
};

export default BlueButton;
