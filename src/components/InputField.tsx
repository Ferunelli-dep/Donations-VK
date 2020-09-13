import { InputBase, makeStyles } from '@material-ui/core';
import React from 'react';

interface IProps {
  title: string;
  placeholder: string;
}

const useStyles = makeStyles((theme) => {
  return {
    title: {
      color: '#6D7885',
      fontSize: 16,
      paddingTop: 14,
      paddingBottom: 8,
    },
    root: {
      backgroundColor: '#F2F3F5',
      width: '100%',
      padding: '5px 10px',
      borderRadius: 10,
      fontSize: 16,
      color: '#818C99',
      marginBottom: 12,
      border: '1px solid rgba(0, 0, 0, .12)',
    },
    input: {
      color: theme.palette.grey[900],
    },
  };
});

const InputField = (props: IProps) => {
  const { title, placeholder } = props;

  const classes = useStyles();

  return (
    <>
      <div className={classes.title}>{title}</div>
      <InputBase
        classes={{ root: classes.root, input: classes.input }}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
