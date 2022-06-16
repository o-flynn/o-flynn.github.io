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
                    <div className='img-container'><img src={require(`../Images/${content.imageName}`)} alt={content.imageAltText}></img></div>
                </div>
            )}
            <p style={props.fontStyles}>
                <ReactMarkdown children={content.text}></ReactMarkdown>
            </p>
        </div>

    if (content.link) {
        return (<Link to={content.link} className='entry-link'>{entryHTML}</Link>);
    } else {
        return (entryHTML);
    }
}
