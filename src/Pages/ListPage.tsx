import React from 'react';
import { Stack, IStackStyles, StackItem, getPropsWithDefaults } from '@fluentui/react';
// import whiteMarble from '../Images/white-marble.jpg';

import Header from '../components/Header';
import EntryList from '../components/EntryList';
import Footer from '../components/Footer';
import './ListPage.css';

const summaryFontStyles: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.5em'
}

const stackStyles: Partial<IStackStyles> = {
  root: {
    margin: '0 auto',
    textAlign: 'center',
    // backgroundImage: `url(${whiteMarble})`,
    // backgroundSize: '400%',
  },
};

interface ListPageProps {
  entryJSON: string;
}

function ListPage(props: ListPageProps) {

  return (
    <div id='container'>
      <Stack horizontalAlign="center" verticalFill styles={stackStyles}>
        <Stack.Item className='header'>
          <Header height="125px" sidesHeight="65%"></Header>
        </Stack.Item>
        <Stack.Item className='head-text'>
          <h1>Title</h1>
          <hr/>
          <p>Subtitle/Blurb - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Stack.Item>
        <StackItem className='entries'>
          <EntryList entriesFile={props.entryJSON} fontStyles={summaryFontStyles}></EntryList>
        </StackItem>
      </Stack>
      <Footer></Footer>
    </div>
  );
};

export default ListPage;
