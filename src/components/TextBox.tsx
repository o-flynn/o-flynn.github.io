import ReactMarkdown from 'react-markdown'; 
import './TextBox.css';

interface Content {
  title?: string;
  text: string;
  imageName: string;
  altText: string;
}

interface TextBoxProps {
  contentFile: string,
}

function TextBox(props: TextBoxProps) {
  const content: Content = require(`../text/${props.contentFile}.json`);
  return (
    <div id='textBoxContainer'>
      <div className="TextBox">
        {!!content.imageName && (
                <img src={require(`../Images/${content.imageName}`)} alt={content.altText}></img>
        )}
        {!!content.title && (<h1>{content.title}</h1>)}
        <div className='text-content'>
          <ReactMarkdown
            linkTarget='_blank'
            children={content.text}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
} 

export default TextBox;
