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
                <div className='text-box-img-container'><img src={require(`../Images/${content.imageName}`)} alt={content.altText}></img></div>
        )}
        {!!content.title && (<h1>{content.title}</h1>)}
        <div className='text-content'><ReactMarkdown children={content.text}></ReactMarkdown></div>
      </div>
    </div>
  );
} 

export default TextBox;
