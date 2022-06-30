import { CSSProperties, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { pages } from '../index';
import './Header.css';

interface HeaderProps {
  height: string;
  sidesHeight: string;
  isLandingPage: boolean;
}


Header.defaultProps = {
  isLandingPage: false
}

function Header(props: HeaderProps) {
  const styles: CSSProperties = {
    height: props.height,
  }
  const clipPathStyles: CSSProperties = {
    // clipPath: `polygon(50% 100%, 0 ${props.sidesHeight}, 0 0, 100% 0, 100% ${props.sidesHeight})`,
    height: 'inherit',
  }
  const pathname: string = useLocation().pathname;
  const [socialsMenuExpanded, setSocialsMenuExpanded] = useState(false);

  const toggleSocialsMenu = () => {
    setSocialsMenuExpanded(!socialsMenuExpanded);
  };

  return (
    <div className={`Header ${ props.isLandingPage ? 'landing-page' : ''}`} style={styles}>
      {!props.isLandingPage && (<div className='buttons-container'>
        <Link to='/'><button id='home' type='button' className='round-button'></button></Link>
        <div className='socials'>
          <button id='socials-button' type='button' className='round-button' onClick={toggleSocialsMenu}></button>
          <div className={`socials-menu ${socialsMenuExpanded ? 'expanded' : 'collapsed'}`}>
            <a href='mailto:oaflynn98@gmail.com' target='_blank'><button id='email-circle' className='round-button'></button></a>
            <a href='https://www.linkedin.com/in/olivia-aiden-flynn/' target='_blank'><button id='linkedin-circle' className='round-button'></button></a>
            <a href='https://github.com/flynnolivia' target='_blank'><button id='github-circle' className='round-button'></button></a>
            <a href='https://twitter.com/oaflynn_dev' target='_blank'><button id='twitter-circle' className='round-button'></button></a>
          </div>
        </div>
      </div>)}
      <div className="header-wrapper" style={clipPathStyles}>
        {props.isLandingPage ? (
          <div className='landing-wrapper'>
            <div className='row-one'>
                <img src={require('../Images/headshot.png')} alt="Olivia Flynn's headshot"></img>
                <div className='basic-info'>
                  <h1>OLIVIA A. FLYNN</h1>
                  <ul>
                    <li id='email'><a href='mailto:oaflynn98@gmail.com' target='_blank'>oaflynn98@gmail.com</a></li>
                    <li id='linkedin'><a href='https://www.linkedin.com/in/olivia-aiden-flynn/' target='_blank'>olivia-aiden-flynn</a></li>
                    <li id='github'><a href='https://github.com/flynnolivia' target='_blank'>flynnolivia</a></li>
                    <li id='twitter'><a href='https://twitter.com/oaflynn_dev' target='_blank'>@oaflynn_dev</a></li>
                  </ul>
                </div>
            </div>
            <div className='row-two'>
              <div className='landing-nav'>
                {pages.map(page => {
                  return (
                    <Link to={`/${page}`}>
                      <div className='button-background'>
                        <button type='button'>{page.toUpperCase()}</button>
                      </div>
                    </Link>);
                })}
              </div>
            </div>
          </div>
        ) :
        (<div className='Header' style={styles}>
          <div className='wrapper'>
            <div className='link-nav'>
            {pages
              .filter(page => '/'+page != pathname)
              .map((page, i) => {
                return (
                  <span className='link-text'>
                    <Link to={`/${page}`}>
                      {page}
                    </Link>
                    {i == pages.length-2 ? '' : ' | '}
                  </span>
                )})}
            </div>
          </div>
        </div>)
        }
        {props.isLandingPage && <video poster='../Images/arial-trees-still.png' id='video-background' muted loop autoPlay disablePictureInPicture playsInline><source src='arial-trees.mp4' type='video/mp4' /></video>}
      </div>
    </div>
  );
}

export default Header;
