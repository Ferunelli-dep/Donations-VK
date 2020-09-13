import { makeStyles } from '@material-ui/core';
import React, { ReactNode } from 'react';
import HeadBar from './HeadBar';
import InfoButton from './InfoButton';
import EventIcon from '@material-ui/icons/Event';

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
      <InfoButton
        Icon={<EventIcon />}
        title="Название сбора"
        description={'Описание сбора'}
      />
      {children}
    </div>
  );
};

export default Page;
