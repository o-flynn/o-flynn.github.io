import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import './Entry.css';

// TODO: Prevent navigation on link long clicks (for selecting text), poppulate header

export interface EntryContent {
    id: string;
    title?: string;
    text: string;
    imageName?: string;
    imageAltText?: string;
    imageRight?: boolean;
    link?: string;
}

interface EntryProps {
    content: EntryContent;
    fontStyles: CSSProperties;
}

export function Entry(props: EntryProps) {
    const content = props.content;
    const entryHTML = 
        <div className='container'>
            {!!content.imageName && (
                <div className='img-frame' style={content.imageRight ? {float: 'right'} : {}}>
                    <img src={require(`../Images/${content.imageName}`)} alt={content.imageAltText}></img>
                </div>
            )}
                <ReactMarkdown children={
                    `**${content.title}**  \  
                    ${content.text}`
                }></ReactMarkdown>
        </div>

    if (content.link) {
        return (<a href={content.link} className='entry-link' target='_blank'>{entryHTML}</a>);
    } else {
        return (entryHTML);
    }
}
