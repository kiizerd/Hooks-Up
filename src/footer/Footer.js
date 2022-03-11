import './Footer.css';
import { Instagram, Mail } from 'grommet-icons';
import hooksUpLogo from '.././media/hooksUpDesign.png';

const ContactItem = (props) => {
  const getItemHeading = (data) => {
    const name    = data.name;
    const heading = name.slice(0,1).toUpperCase() + name.slice(1, name.length);

    if (name == 'insta') {
      return heading.concat('gram');
    } else {
      return heading;
    }
  }

  return(
    <li className={'ContactInfo-field ContactInfo-' + props.data.name}>
      <span className='ContactInfo-itemHeading'>
        {getItemHeading(props.data) + ':'}
      </span>
      <span className='ContactInfo-contactInfo'>
        {props.data.info}
      </span>
    </li>
  );
}

const ContactInfo = (props) => {
  const phoneNumber  = props.phoneNumber
  const emailAddress = props.emailAddress
  const instaLink    = props.instaLink

  const emailElement = (
    <a href={'mailto: ' + emailAddress} target="_blank" rel="noopener noreferrer">
      {emailAddress + `\t|\t\t`}
      <Mail size='medium' color='#fedcba'/>
    </a>
  );
  

  const profileStartIndex = instaLink.indexOf('.com/') + 5;
  const instaElement = (
    <a href={instaLink} target="_blank" rel="noopener noreferrer">
      {instaLink.slice(profileStartIndex, instaLink.length) + `\t|\t\t`}
      <Instagram size='medium' color='#fedcba'/>
    </a>
  );

  return(
    <ul className='ContactInfo-wrapper'>
      <ContactItem data={{ name: 'email', info: emailElement }} />
      <ContactItem data={{ name: 'phone', info: phoneNumber  }} />
      <ContactItem data={{ name: 'insta', info: instaElement }} />
    </ul>
  );
}

const Logo = () => {
  return(
    <div>
      <img className='Footer-logo' src={hooksUpLogo} alt="Hooks Up Design Logo"></img>
    </div>
  );
}

const Footer = () => {
  return(
    <div className='Footer'>
      <ContactInfo
        emailAddress='mtnmandad1@yahoo.com'
        phoneNumber='(707) 483 - 4351'
        instaLink='https://instagram.com/hooksupmexico'        
      />
      <Logo />
    </div>
  );
}

export default Footer;