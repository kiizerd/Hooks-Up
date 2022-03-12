import './ContactInfo.css'
import { Instagram, Mail, Phone } from 'grommet-icons';

const ContactItem = (props) => {
  const getItemHeading = (name) => {
    const heading = name.slice(0,1).toUpperCase() + name.slice(1, name.length);

    if (name === 'insta') {
      return heading.concat('gram');
    } else {
      return heading;
    }
  }

  return(
    <li className={'ContactInfo-field ContactInfo-' + props.name}>
      <span className='ContactInfo-itemHeading'>
        {getItemHeading(props.name) + ':'}
      </span>
      <span className='ContactInfo-info'>
        {props.element}
      </span>
    </li>
  );
}

const ContactInfo = (props) => {
  const emailAddress = props.emailAddress
  const emailElement = (
    <a href={'mailto: ' + emailAddress} target="_blank" rel="noopener noreferrer">
      {emailAddress + `\t|\t\t`}
      <Mail size='medium' color='#fedcba'/>
    </a>
  );


  const phoneNumber  = props.phoneNumber
  const phoneElement = (
    <a href={'tel:' + phoneNumber}>
      {phoneNumber + `\t|\t\t`}
      <Phone size='medium' color='#fedcba' />
    </a>
  );

  const instaLink    = props.instaLink
  const profileStartIndex = instaLink.indexOf('.com/') + 5;
  const instaElement = (
    <a href={instaLink} target="_blank" rel="noopener noreferrer">
      {instaLink.slice(profileStartIndex, instaLink.length) + `\t|\t\t`}
      <Instagram size='medium' color='#fedcba'/>
    </a>
  );

  return(
    <ul className='ContactInfo-wrapper'>
      <ContactItem name='email' element={emailElement} />
      <ContactItem name='phone' element={phoneElement} />
      <ContactItem name='insta' element={instaElement} />
    </ul>
  );
}

export default ContactInfo;