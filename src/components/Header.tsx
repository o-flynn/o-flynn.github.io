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
    clipPath: `polygon(50% 100%, 0 ${props.sidesHeight}, 0 0, 100% 0, 100% ${props.sidesHeight})`,
    height: 'inherit',
  }
  const pathname: string = useLocation().pathname;
  const [socialsMenuExpanded, setSocialsMenuExpanded] = useState(false);

  const toggleSocialsMenu = () => {
    setSocialsMenuExpanded(!socialsMenuExpanded);
  };

  return (
    <div className="Header" style={styles}>
      {!props.isLandingPage && (<div className='buttons-container'>
        <Link to='/'><button id='home' type='button' className='round-button'></button></Link>
        <div className='socials'>
          <button id='socials-button' type='button' className='round-button' onClick={toggleSocialsMenu}></button>
          <div className={`socials-menu ${socialsMenuExpanded ? 'expanded' : 'collapsed'}`}>
            <Link to='mailto:oaflynn98@gmail.com'><button id='email-circle' className='round-button'></button></Link>
            <Link to='https://www.linkedin.com/in/olivia-aiden-flynn/'><button id='linkedin-circle' className='round-button'></button></Link>
            <Link to='https://github.com/flynnolivia'><button id='github-circle' className='round-button'></button></Link>
            <Link to='https://twitter.com/oaflynn_dev'><button id='twitter-circle' className='round-button'></button></Link>
          </div>
        </div>
      </div>)}
      <div className="header-wrapper" style={clipPathStyles}>
        {props.isLandingPage ? (
          <div className='landing-wrapper'>
            <div className='row-one'>
                <img src={require('../Images/headshot.png')} alt="A picture of Olivia Flynn"></img>
                <div className='basic-info'>
                  <h1>OLIVIA A. FLYNN</h1>
                  <ul>
                    <li id='email'><Link to='mailto:oaflynn98@gmail.com'>oaflynn98@gmail.com</Link></li>
                    <li id='linkedin'><Link to='https://www.linkedin.com/in/olivia-aiden-flynn/'>olivia-aiden-flynn</Link></li>
                    <li id='github'><Link to='https://github.com/flynnolivia'>flynnolivia</Link></li>
                    <li id='twitter'><Link to='https://twitter.com/oaflynn_dev'>@oaflynn_dev</Link></li>
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
        {props.isLandingPage && <video id='video-background' muted loop autoPlay><source src='arial-trees.mp4' type='video/mp4' /></video>}
      </div>
    </div>
  );
}

export default Header;
