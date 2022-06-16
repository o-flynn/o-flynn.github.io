import React from 'react';
import { Stack, FontWeights, IStackTokens, IStackStyles, ITextStyles, getPropsWithDefaults } from '@fluentui/react';
import whiteMarble from '../Images/white-marble.jpg';

import Header from '../components/Header';
import TextBox from '../components/TextBox';
import Footer from '../components/Footer';
import './TextPage.css';

const stackStyles: Partial<IStackStyles> = {
  root: {
    margin: '0 auto',
    textAlign: 'center',
    backgroundImage: `url(${whiteMarble})`,
    backgroundSize: '400%',
  },
};

interface TextPageProps {
  contentJSON: string,
}

function TextPage(props: TextPageProps) {
  return (
    <div id='container'>
      <Stack horizontalAlign="center" verticalFill styles={stackStyles}>
        <Stack.Item className='header'>
          <Header height='18vh' sidesHeight='65%'></Header>
        </Stack.Item>
        <Stack.Item className='text'><TextBox contentFile={props.contentJSON}></TextBox></Stack.Item>
      </Stack>
      <Footer></Footer>
    </div>
  );
};

export default TextPage;
