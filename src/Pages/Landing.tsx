import React, { useState } from 'react';
import { Stack, IStackStyles, StackItem } from '@fluentui/react';
// import whiteMarble from '../Images/white-marble.jpg';

import Header from '../components/Header';
import EntryList from '../components/EntryList';
import Footer from '../components/Footer';
import './Landing.css';

const summaryFontStyles: React.CSSProperties = {
  fontSize: '18px',
  lineHeight: '1.5em'
}

const stackStyles: Partial<IStackStyles> = {
  root: {
    margin: '0 auto',
    textAlign: 'center',
  },
};

export const Landing: React.FunctionComponent = () => {

  return (
    <div>
      <Stack horizontalAlign="center" verticalFill styles={stackStyles}>
        <Stack.Item className='header'>
          <Header height="690px" sidesHeight="47%" isLandingPage={true}></Header>
        </Stack.Item>
        <StackItem className='summaries'>
          <EntryList entriesFile="landing-page" fontStyles={summaryFontStyles}></EntryList>
        </StackItem>
      </Stack>
      <Footer></Footer>
    </div>
  );
};
