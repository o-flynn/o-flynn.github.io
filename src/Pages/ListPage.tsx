import React from 'react';
import { Stack, IStackStyles, StackItem, getPropsWithDefaults } from '@fluentui/react';

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
  },
};

interface ListPageProps {
  entryJSON: string;
}

function ListPage(props: ListPageProps) {
  const titles = require('../text/landing-page.json').entries;
  const headerText = titles.find(
    (entry: {id: string}) => entry.id === props.entryJSON)

  return (
    <div id='container'>
      <Stack horizontalAlign="center" verticalFill styles={stackStyles}>
        <Stack.Item className='header'>
          <Header height="125px" sidesHeight="65%"></Header>
        </Stack.Item>
        <Stack.Item className='head-text'>
          <h1>{headerText.title}</h1>
          <hr/>
          <p>{headerText.text}</p>
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
