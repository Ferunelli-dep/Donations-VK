import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
import HeadBar from '../components/HeadBar';
import UploadFile from '../components/UploadFile';

interface IPageProps {
  children?: ReactNode;
  title: string;
}

const useStyles = makeStyles({
  page: {
    fontFamily: 'Roboto',
  },
});

const Page = (props: IPageProps) => {
  const { children, title } = props;
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <HeadBar title={title} />
      <UploadFile />
      {children}
    </div>
  );
};

export default Page;
