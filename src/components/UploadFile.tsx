import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

const useStyles = makeStyles({
  root: {
    color: '#3F8AE0',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    padding: 50,
    border: '1px dashed #3F8AE0',
    textTransform: 'none',
    fontWeight: 500,
  },
  icon: {
    marginRight: 10,
  },
});

const UploadFile = () => {
  const classes = useStyles();

  return (
    <Button className={classes.root}>
      <CropOriginalIcon className={classes.icon} />
      Загрузить обложку
    </Button>
  );
};

export default UploadFile;
