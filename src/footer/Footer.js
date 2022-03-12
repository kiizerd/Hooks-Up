import './Footer.css';
import hooksUpLogo from '.././media/hooksUpDesign.png';
import ContactInfo from '.././contactInfo/ContactInfo.js'


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
        phoneNumber='707-483-4351'
        instaLink='https://instagram.com/hooksupmexico'        
      />
      <Logo />
    </div>
  );
}

export default Footer;