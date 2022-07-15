import { CSSProperties } from 'react';
import { Stack } from '@fluentui/react';

import { Entry, EntryContent } from './Entry';
import './EntryList.css';

interface EntryListProps {
    entriesFile: string,
    fontStyles: CSSProperties,
}

function EntryList(props: EntryListProps) {
    const entries: EntryContent[] = require(`../text/${props.entriesFile}.json`).entries;
    const entryElements = entries.map(
        entry => <Entry content={entry} fontStyles={props.fontStyles} key={entry.id}></Entry>
    );

    return (
    <Stack horizontalAlign='center'>
        {entryElements}
    </Stack>
    );
}

export default EntryList;
